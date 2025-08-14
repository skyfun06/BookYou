const closeBtn = document.querySelector<HTMLButtonElement>("#closebtn")!;
const openBtn = document.querySelector<HTMLButtonElement>("#openbtn")!;
const sidenav = document.querySelector<HTMLDivElement>("#sidenav")!;

closeBtn.addEventListener("click", () => sidenav.classList.remove("open"));
openBtn.addEventListener("click", () => sidenav.classList.add("open"));
