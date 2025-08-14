import * as Slick from "@webtools/slick-server";

export default {
	name: "dashboard",
	favicon: "/favicon.ico",

	styles: [
		"/styles/reset.css",
		"/styles/dashboard.css",
	],
	scripts: [
		"/scripts/dashboard.ts"
	],

	head: <></>,
	body: (
		<>
			<div class="dashboard">
				<aside class="sidebar" id="sidenav">
					<div class="logo">
						<div>
							<img
								src="/favicon.webp"
								alt="logo"
								width="30"
								height="30"
							/>
							<h2>BookYou</h2>
						</div>
						<button type="button" class="x" id="closebtn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-x-icon lucide-x"
							>
								<path d="M18 6 6 18" />
								<path d="m6 6 12 12" />
							</svg>
						</button>
					</div>
					<nav class="menu">
						<a href="#" class="select">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<rect width="7" height="9" x="3" y="3" rx="1" />
								<rect width="7" height="5" x="14" y="3" rx="1" />
								<rect width="7" height="9" x="14" y="12" rx="1" />
								<rect width="7" height="5" x="3" y="16" rx="1" />
							</svg>
							Tableau de bord
						</a>
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M8 2v4" />
								<path d="M16 2v4" />
								<rect width="18" height="18" x="3" y="4" rx="2" />
								<path d="M3 10h18" />
							</svg>
							Calendrier
						</a>
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<path d="M16 3.128a4 4 0 0 1 0 7.744" />
								<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
								<circle cx="9" cy="7" r="4" />
							</svg>
							Clients
						</a>
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
							</svg>
							Préstations
						</a>
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
								<circle cx="12" cy="12" r="3" />
							</svg>
							Paramètres
						</a>
					</nav>
				</aside>

				<main class="main">
					<header class="header">
						<div>
							<div>
								<h2>Salon Belle Époque</h2>
								<p>Coiffure & Esthétique</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="m21 21-4.34-4.34" />
									<circle cx="11" cy="11" r="8" />
								</svg>
								<input type="text" placeholder="Rechercher un client, RDV..." />
							</div>
						</div>
						<button type="button" id="openbtn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-menu-icon lucide-menu"
							>
								<path d="M4 12h16" />
								<path d="M4 18h16" />
								<path d="M4 6h16" />
							</svg>
						</button>
						<div>
							<button class="rotate-center" type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M10.268 21a2 2 0 0 0 3.464 0" />
									<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
								</svg>
							</button>
							<img src="https://placehold.co/40x40" alt="user" />
						</div>
					</header>

					<div id="app"></div>
				</main>
			</div>
		</>
	),

	onrequest: null,
} satisfies Slick.Template;
