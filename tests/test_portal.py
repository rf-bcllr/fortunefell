import importlib.util
import json
import shutil
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('portal', ROOT / 'tools/build_portal.py')
portal = importlib.util.module_from_spec(spec)
spec.loader.exec_module(portal)


class PortalTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        for folder in ('data', 'public'):
            shutil.copytree(ROOT / folder, self.root / folder)

    def write(self, name, value):
        (self.root / 'data' / name).write_text(json.dumps(value))

    def test_no_fake_demo_and_html_escaped(self):
        tasks = json.loads((self.root / 'data/tasks.json').read_text())
        tasks[0]['title'] = '<img src=x onerror=alert(1)>'
        self.write('tasks.json', tasks)
        page = portal.build(self.root)
        self.assertIn('Demo aguardando importação', page)
        self.assertNotIn('href="demos/', page)
        self.assertIn('&lt;img', page)
        self.assertNotIn('<img src=x onerror=', page)
        self.assertNotIn('{{', page)

    def test_task_reservation_and_done_evidence(self):
        tasks = json.loads((self.root / 'data/tasks.json').read_text())
        for t in tasks[:2]:
            t.update(status='doing', owner='codex-a', branch=f'codex-a/{t["id"].lower()}-teste')
        self.write('tasks.json', tasks)
        with self.assertRaises(AssertionError):
            portal.validate(self.root)
        tasks[1]['status'] = 'done'
        self.write('tasks.json', tasks)
        with self.assertRaises(AssertionError):
            portal.validate(self.root)

    def test_release_requires_file_and_safe_relative_path(self):
        release = dict(version='v46', entry='demos/v46/index.html', commit='test-origin', checks='fixture only', summary='Teste')
        self.write('releases.json', [release])
        with self.assertRaises(AssertionError):
            portal.validate(self.root)
        target = self.root / 'public/demos/v46/index.html'
        target.parent.mkdir(parents=True)
        target.write_text('<title>Fixture</title>')
        self.assertIn('Jogar v46', portal.build(self.root))
        release['entry'] = '../outside.html'
        self.write('releases.json', [release])
        with self.assertRaises(AssertionError):
            portal.validate(self.root)

    def test_duplicate_ids_rejected(self):
        tasks = json.loads((self.root / 'data/tasks.json').read_text())
        tasks.append(tasks[0])
        self.write('tasks.json', tasks)
        with self.assertRaises(AssertionError):
            portal.validate(self.root)


if __name__ == '__main__':
    unittest.main()
