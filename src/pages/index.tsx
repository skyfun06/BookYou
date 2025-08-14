import * as Slick from "@webtools/slick-server";

export default {
	url: "/",
	template: "app",

	title: "",

	styles: [
		"/styles/app/index.css",
	],
	scripts: [],

	head: <></>,
	body: (
		<>
			<section>
				<div>
					<h1>
						Simplifiez vos rendez- <br />vous. <span>Gagnez du temps.</span>
					</h1>
					<h2>
						BookYou est l'agenda en ligne fait pour les pros : artisans,<br />{" "}
						coiffeurs, thérapeutes, coachs, indépendants…
					</h2>
					<div>
						<p>
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
								class="check"
							>
								<path d="M20 6 9 17l-5-5" />
							</svg>
							Vos clients prennent RDV 24h/24
						</p>
						<p>
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
								class="check"
							>
								<path d="M20 6 9 17l-5-5" />
							</svg>
							Moins d'oublis, plus de temps pour vous
						</p>
						<p>
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
								class="check"
							>
								<path d="M20 6 9 17l-5-5" />
							</svg>
							Zéro prise de tête
						</p>
					</div>
					<a href="#">🔵 Créer mon compte gratuit</a>
				</div>
				<div class="agenda">
					<div>
						<div>
							<p>Mon Agenda</p>
							<p>Janvier 2025</p>
						</div>
						<div>
							<div class="jours">L</div>
							<div class="jours">M</div>
							<div class="jours">M</div>
							<div class="jours">J</div>
							<div class="jours">V</div>
							<div class="jours">S</div>
							<div class="jours">D</div>
							<div class="numero">1</div>
							<div class="numero">2</div>
							<div class="numero">3</div>
							<div class="numero">4</div>
							<div class="numero">5</div>
							<div class="numero">6</div>
							<div class="numeroChoisi">7</div>
							<div class="numero">8</div>
							<div class="numero">9</div>
							<div class="numero">10</div>
							<div class="numero">11</div>
							<div class="numero">12</div>
							<div class="numero">13</div>
							<div class="numero">14</div>
						</div>
						<div>
							<div>
								<div>
									<p>Coupe & Brushing</p>
									<p>Marie Dupont</p>
								</div>
								<p>14:00</p>
							</div>
							<div>
								<div>
									<p>Massage relaxant</p>
									<p>Pierre Martin</p>
								</div>
								<p>16:30</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="section">
				<h2 class="titre">Ce que BookYou fait pour vous</h2>
				<div>
					<div>
						<div>
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
								class="lucide lucide-calendar-icon lucide-calendar"
							>
								<path d="M8 2v4" />
								<path d="M16 2v4" />
								<rect width="18" height="18" x="3" y="4" rx="2" />
								<path d="M3 10h18" />
							</svg>
						</div>
						<p>📅 Agenda intelligent</p>
						<p>
							Créez vos disponibilités en <br />quelques clics
						</p>
						<p>
							Gérez vos rendez-vous sur ordinateur <br />ou mobile
						</p>
					</div>
					<div>
						<div>
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
								class="lucide lucide-bell-icon lucide-bell"
							>
								<path d="M10.268 21a2 2 0 0 0 3.464 0" />
								<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
							</svg>
						</div>
						<p>🔔 Rappels automatiques</p>
						<p>
							Vos clients reçoivent un rappel <br />par mail ou SMS
						</p>
						<p>Réduction du taux d'oubli</p>
					</div>
					<div>
						<div>
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
								class="lucide lucide-link-icon lucide-link"
							>
								<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
								<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
							</svg>
						</div>
						<p>🔗 Lien de réservation à partager</p>
						<p>
							Par SMS, mail, WhatsApp ou site <br />internet
						</p>
						<p>Votre agenda est accessible 24h/24</p>
					</div>
					<div>
						<div>
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
								class="lucide lucide-smile-icon lucide-smile"
							>
								<circle cx="12" cy="12" r="10" />
								<path d="M8 14s1.5 2 4 2 4-2 4-2" />
								<line x1="9" x2="9.01" y1="9" y2="9" />
								<line x1="15" x2="15.01" y1="9" y2="9" />
							</svg>
						</div>
						<p>🧘 Zéro prise de tête</p>
						<p>Interface simple, sans jargon</p>
						<p>Zéro pub, zéro stress</p>
					</div>
				</div>
			</section>
			<section class="section">
				<h2 class="titre">Ils ont choisi BookYou</h2>
				<div>
					<div>
						<p>
							"Je suis coiffeuse à domicile, BookYou m'a fait gagner 2h par semaine."
						</p>
						<div>
							<p>👩‍💼</p>
							<div>
								<p>Sophie</p>
								<p>Coiffeuse indépendante</p>
							</div>
						</div>
					</div>
					<div>
						<p>
							"Mes clients adorent pouvoir réserver tout seuls à minuit !"
						</p>
						<div>
							<p>👨‍⚕️</p>
							<div>
								<p>Marc</p>
								<p>Ostéopathe</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="section">
				<h2 class="titre">Un tarif simple et sans engagement</h2>
				<div>
					<div>
						<p>Gratuit</p>
						<p>
							0 € <span>/ mois</span>
						</p>
						<div>
							<p>
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
									class="check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								Agenda en ligne
							</p>
							<p>
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
									class="check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								Rappels par mail
							</p>
							<p class="disabled">
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
									class="x"
								>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</svg>
								Rappels SMS
							</p>
							<p class="disabled">
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
									class="x"
								>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</svg>
								Page personnalisée
							</p>
						</div>
						<a href="#">Commencez gratuitement</a>
					</div>
					<div class="famous">
						<p>Pro</p>
						<p>
							9 € <span>/ mois</span>
						</p>
						<div>
							<p>
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
									class="check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								Agenda en ligne
							</p>
							<p>
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
									class="check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								Rappels par mail
							</p>
							<p>
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
									class="check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								Rappels SMS
							</p>
							<p>
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
									class="check"
								>
									<path d="M20 6 9 17l-5-5" />
								</svg>
								Page personnalisée
							</p>
						</div>
						<a href="#" class="blue">🔵 Essayer Pro</a>
					</div>
				</div>
			</section>
			<section class="section">
				<h2 class="titre">Essayez BookYou gratuitement</h2>
				<p>Aucune CB requise.</p>
				<p>En 2 minutes, vous pouvez recevoir vos premiers RDV.</p>
				<div>
					<a href="#">🔵 Créer mon compte</a>
					<a href="#">📩 Nous contacter</a>
				</div>
			</section>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Slick.Page;
