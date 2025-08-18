(() => {
  const openBtn = document.querySelector<HTMLButtonElement>("#openModalBtn")!;
  const closeBtn = document.querySelector<HTMLButtonElement>("#closeBtn")!;
  const modal = document.querySelector<HTMLDivElement>("#modal")!;

  openBtn.addEventListener("click", () => modal.style.display = "flex");
  closeBtn.addEventListener("click", () => modal.style.display = "none");
})();
