const statusFilter = document.querySelector('#status');
const search = document.querySelector('#task-search');
const tasks = [...document.querySelectorAll('.task')];
const resultCount = document.querySelector('#task-result-count');
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

function filterTasks() {
  const term = normalize(search.value.trim());
  let visible = 0;
  for (const task of tasks) {
    task.hidden = (statusFilter.value !== 'all' && task.dataset.status !== statusFilter.value)
      || !normalize(task.textContent).includes(term);
    if (!task.hidden) visible += 1;
  }
  document.querySelector('#empty').hidden = visible !== 0;
  resultCount.textContent = `${visible} de ${tasks.length} tarefas`;
}
statusFilter.addEventListener('change', filterTasks);
search.addEventListener('input', filterTasks);
document.querySelector('#clear-filters').addEventListener('click', () => {
  statusFilter.value = 'all';
  search.value = '';
  filterTasks();
  search.focus();
});
filterTasks();
