const filter = document.querySelector('#status');
const tasks = [...document.querySelectorAll('.task')];
filter.addEventListener('change', () => {
  for (const task of tasks) task.hidden = filter.value !== 'all' && task.dataset.status !== filter.value;
  document.querySelector('#empty').hidden = tasks.some(task => !task.hidden);
});
