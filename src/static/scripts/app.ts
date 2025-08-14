const header = document.querySelector<HTMLDivElement>("header")!;
const showHeader = document.querySelector<HTMLButtonElement>("#show-header")!;
const hideHeader = document.querySelector<HTMLButtonElement>("#hide-header")!;

showHeader.addEventListener("click", () => {
    showHeader.classList.add("active");
    hideHeader.classList.remove("active");
    header.classList.add("show");
});

hideHeader.addEventListener("click", () => {
    hideHeader.classList.add("active");
    showHeader.classList.remove("active");
    header.classList.remove("show");
});