// /scripts/dashboard/prestation.ts
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector<HTMLButtonElement>("#openModalBtn");
  const closeBtn = document.querySelector<HTMLButtonElement>("#closeModalBtn"); // bouton "Annuler"
  const closeIconBtn = document.querySelector<HTMLButtonElement>("#modal .closeBtn"); // la croix (class="closeBtn")
  const modal = document.querySelector<HTMLDivElement>("#modal");
  const overlay = document.querySelector<HTMLDivElement>("#overlay");

  if (!openBtn || !modal || !overlay) {
    console.warn("Modal: éléments manquants (openBtn, modal ou overlay).");
    return;
  }

  const open = () => {
    modal.style.display = "flex";
    overlay.style.display = "block";
    // Optionnel : bloquer le scroll derrière
    // document.body.style.overflow = "hidden";
  };

  const close = () => {
    modal.style.display = "none";
    overlay.style.display = "none";
    // document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", open);

  // Ferme avec le bouton "Annuler"
  if (closeBtn) closeBtn.addEventListener("click", close);

  // Ferme avec la croix
  if (closeIconBtn) closeIconBtn.addEventListener("click", close);

  // Ferme en cliquant sur l’overlay
  overlay.addEventListener("click", close);

  // Ferme avec la touche Echap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
});
