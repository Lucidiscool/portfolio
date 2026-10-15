const filters = [...document.querySelectorAll('.filter')];
const projects = [...document.querySelectorAll('.project')];
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', item === button ? 'true' : 'false'); });
  const category = button.dataset.filter;
  projects.forEach((project) => project.classList.toggle('hidden', category !== 'all' && project.dataset.category !== category));
}));
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded));
  menu.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
  nav.classList.toggle('open', expanded);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open menu'); nav.classList.remove('open');
}));
