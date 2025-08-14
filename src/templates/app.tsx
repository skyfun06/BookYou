import * as Slick from "@webtools/slick-server";

export default {
	name: "app",
	favicon: "/favicon.ico",

	styles: [
		"/styles/reset.css",
		"/styles/app.css",
	],
	scripts: [
		"/scripts/app.ts",
	],

	head: <></>,
	body: (
		<>
			<div id="responsive-header">
				<a href="/" className="logo">
					<img src="favicon.webp" alt="logo" width="30" height="30" />
					BookYou
				</a>
				<button type="button" id="show-header">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-menu-icon lucide-menu"
					>
						<path d="M4 12h16" />
						<path d="M4 18h16" />
						<path d="M4 6h16" />
					</svg>
				</button>
				<button type="button" id="hide-header" className="active">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-x-icon lucide-x"
					>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>
			</div>
			<header>
				<div>
					<div>
						<a href="/" className="logo">
							<img src="favicon.webp" alt="logo" width="30" height="30" />
							BookYou
						</a>

						<div className="links">
							<a href="/#features">Fonctionnalités</a>
							<a href="/#testimonials">Témoignages</a>
							<a href="#pricing">Tarifs</a>
							<a href="#faq">FAQ</a>
						</div>
					</div>
					<div>
						<a href="/auth/login" className="button min empty">Accéder à ma boutique</a>
						<a href="/auth/register" className="button min fill">Ouvrir ma boutique</a>
					</div>
				</div>
			</header>
			<div id="app"></div>
			<footer>
				<div>
					<div>
						<p>
							<img src="favicon.webp" alt="logo" width="30" height="30" />
							BookYou
						</p>
						<p>
							L'agenda en ligne simple et efficace pour tous les <br />professionnels.
						</p>
					</div>
					<div>
						<p>Liens utiles</p>
						<a href="#">Mentions legales</a>
						<a href="#">CGU</a>
						<a href="#">Contact</a>
					</div>
					<div>
						<p>Contact</p>
						<p>📧 contact@bookyou.fr</p>
						<div>
							<a href="#">Facebook</a>
							<a href="#">Twitter</a>
							<a href="#">LinkedIn</a>
						</div>
					</div>
				</div>
				<div>
					<p>Copyright © BookYou 2025. Tous droits réservés.</p>
				</div>
			</footer>
		</>
	),

	onrequest: null,
} satisfies Slick.Template;
