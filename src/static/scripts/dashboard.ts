const closeBtn = document.querySelector<HTMLButtonElement>("#closebtn")!;
const openBtn = document.querySelector<HTMLButtonElement>("#openbtn")!;
const sidenav = document.querySelector<HTMLDivElement>("#sidenav")!;

closeBtn.addEventListener("click", () => sidenav.classList.remove("open"));
openBtn.addEventListener("click", () => sidenav.classList.add("open"));

const links = document.querySelectorAll('#menu a');

const currentPath = window.location.pathname;
links.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('select');
  }
});

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    links.forEach(l => l.classList.remove('select'));

    link.classList.add('select');

    history.pushState({}, '', link.getAttribute('href'));
  });
});
