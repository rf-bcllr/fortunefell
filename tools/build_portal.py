"""Build the public portal from versioned records, using only Python's stdlib."""
import html
import json
import re
import shutil
import subprocess
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parents[1]
STATES = {'blocked': 'Bloqueada', 'todo': 'Priorizada', 'doing': 'Em andamento', 'review': 'Em revisão', 'done': 'Concluída'}


def esc(value):
    return html.escape(str(value), quote=True)


def validate(root):
    tasks = json.loads((root / 'data/tasks.json').read_text())
    releases = json.loads((root / 'data/releases.json').read_text())
    ids = set()
    active = set()
    for task in tasks:
        ident = task['id']
        assert re.fullmatch(r'FF-\d{3,}', ident) and ident not in ids, 'ID de tarefa inválido/duplicado'
        ids.add(ident)
        assert task['status'] in STATES and task['priority'] in ('P0', 'P1', 'P2', 'P3')
        assert task['owner'] in (None, 'codex-a', 'codex-b')
        assert isinstance(task['title'], str) and task['title'].strip()
        if task['status'] in ('doing', 'review'):
            assert task['owner'] and task['branch'], 'Trabalho ativo exige responsável e branch'
            assert task['branch'].startswith(f"{task['owner']}/{ident.lower()}-"), 'Branch deve identificar conta e tarefa'
            assert task['owner'] not in active, 'Uma tarefa ativa por conta'
            active.add(task['owner'])
        if task['status'] == 'done':
            assert task['evidence'], 'Conclusão exige evidência'
    versions = set()
    for release in releases:
        assert re.fullmatch(r'v[\w.-]+', release['version']) and release['version'] not in versions
        versions.add(release['version'])
        entry = PurePosixPath(release['entry'])
        assert not entry.is_absolute() and '..' not in entry.parts and '\\' not in str(entry)
        assert entry.parts[:2] == ('demos', release['version']) and entry.suffix == '.html'
        target = root / 'public' / str(entry)
        assert target.is_file() and not target.is_symlink(), 'HTML da demo ausente'
        if 'archive' in release:
            archive = release['archive']
            assert re.fullmatch(r'[a-zA-Z0-9][a-zA-Z0-9._-]*\.zip', archive), 'Nome do ZIP inválido'
            pack = target.with_name(archive)
            assert pack.is_file() and not pack.is_symlink(), 'ZIP da demo ausente'
        assert release['commit'] and release['checks'], 'Versão exige commit de origem e verificações'
    for path in (root / 'public').rglob('*'):
        assert not path.is_symlink(), 'Links simbólicos não são permitidos no conteúdo público'
        assert not path.name.startswith('.'), 'Arquivo oculto na área pública'
    return tasks, releases


def build(root=ROOT, output=None, commit='local'):
    output = output or root / 'site'
    tasks, releases = validate(root)
    downloads = json.loads((root / 'data/downloads.json').read_text())
    for item in downloads['packages'] + downloads['sources']:
        assert item['url'].startswith('https://github.com/rf-bcllr/fortunefell/raw/refs/heads/entrega-assets/entregas/') and item['url'].endswith('.zip'), 'URL de download inválida'
        assert re.fullmatch(r'[a-f0-9]{64}', item['sha256']) and item['bytes'] > 0
    complete = next(p for p in downloads['packages'] if p['kind'] == 'complete')
    download_cards = []
    for item in downloads['packages']:
        primary = item['kind'] == 'complete'
        download_cards.append(f'<article class="download-card {esc(item["kind"])}"><span class="package-tag">{"Tudo em um arquivo" if primary else "Download menor"}</span><h3>{esc(item["name"])}</h3><p class="package-size">{esc(item["size"])}</p><p class="package-description">{esc(item["description"])}</p><a class="button button-{"primary" if primary else "secondary"}" href="{esc(item["url"])}">Baixar pacote ↓</a></article>')
    sources = ''.join(f'<li><a href="{esc(i["url"])}"><span>{esc(i["name"])} ↓</span><small>{esc(i["size"])}</small></a></li>' for i in downloads['sources'])
    template = (root / 'public/index.html').read_text()
    cards = []
    for t in sorted(tasks, key=lambda t: (t['priority'], t['id'])):
        cards.append(f'<article class="task" data-status="{esc(t["status"])}"><div class="task-meta"><span class="task-id">{esc(t["id"])}</span><span class="priority">{esc(t["priority"])}</span><span class="task-state">{STATES[t["status"]]}</span></div><h3>{esc(t["title"])}</h3><p class="task-note">{esc(t["note"])}</p><p class="task-owner">Responsável: {esc(t["owner"] or "a reservar")}</p>' + (f'<details class="task-details"><summary>Evidência da entrega</summary><p>{esc(t["evidence"])}</p></details>' if t['evidence'] else '') + '</article>')
    version_cards = []
    for r in releases:
        version_cards.append(f'<article class="release"><h3>{esc(r["version"])}</h3><p>{esc(r["summary"])}</p><p>Origem: <code>{esc(r["commit"])}</code></p><p>Verificações: {esc(r["checks"])}</p><a href="{esc(r["entry"])}">Testar {esc(r["version"])}</a></article>')
    demo = f'<a class="button" href="{esc(releases[-1]["entry"])}">Jogar {esc(releases[-1]["version"])}</a>' if releases else '<div class="notice"><strong>Demo aguardando importação</strong><p>Os assets deste pacote ainda precisam ser integrados à demo. A versão externa continua no endereço original.</p><a class="button button-secondary" href="https://fortune-fell-recuperado.fragrantgear2.chatgpt.site/">Abrir demo original ↗</a></div>'
    if releases and (archive := releases[-1].get('archive')):
        url = PurePosixPath(releases[-1]['entry']).with_name(archive)
        demo += f' <a class="button button-secondary" href="{esc(url)}" download>Baixar ZIP da demo ↓</a>'
    replacements = {'COMMIT': esc(commit), 'TASKS': ''.join(cards), 'DEMO': demo, 'RELEASES': ''.join(version_cards) or '<p>Nenhuma versão importada neste portal.</p>'}
    replacements.update(COMPLETE_URL=esc(complete['url']), COMPLETE_SIZE=esc(complete['size']), DOWNLOADS=''.join(download_cards), SOURCES=sources, TASK_DONE=str(sum(t['status'] == 'done' for t in tasks)), TASK_OPEN=str(sum(t['status'] != 'done' for t in tasks)))
    page = re.sub(r'\{\{([A-Z_]+)\}\}', lambda m: replacements[m[1]], template)
    output.mkdir(parents=True, exist_ok=True)
    shutil.copytree(root / 'public', output, dirs_exist_ok=True)
    (output / 'index.html').write_text(page)
    (output / 'build.json').write_text(json.dumps({'portal_commit': commit, 'demo_versions': [r['version'] for r in releases]}, indent=2))
    return page


if __name__ == '__main__':
    result = subprocess.run(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True, capture_output=True)
    page = build(commit=result.stdout.strip() if result.returncode == 0 else 'local-sem-commit')
    print('Portal validado e gerado em site/.')
