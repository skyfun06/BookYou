window.addEventListener("DOMContentLoaded", () => {
	const steps = document.querySelectorAll<HTMLElement>(".step");
	const nextButtons = document.querySelectorAll<HTMLButtonElement>(".btn-next");
    const prevButtons = document.querySelectorAll<HTMLButtonElement>(".btn-prev");
	let currentStep = 0;

	// Masque toutes les étapes sauf celle en cours
	function showStep(index: number) {
		steps.forEach((step, i) => {
			step.style.display = i === index ? "block" : "none";
		});
	}

	// Affiche la première étape au démarrage
	showStep(currentStep);

	// Gestion des clics sur les boutons "Suivant"
	nextButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (currentStep < steps.length - 1) {
				currentStep++;
				showStep(currentStep);
			}
		});
	});

	// Gestion des clics sur les boutons "Précédent"
	prevButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (currentStep > 0) {
				currentStep--;
				showStep(currentStep);
			}
		});
	});
});
