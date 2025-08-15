import * as Slick from "@webtools/slick-server";

export default {
	url: "/dashboard/clients",
	template: "dashboard",

	title: "",

	styles: [
		"/styles/dashboard/clients.css",
	],
	scripts: [],

	head: <></>,
	body: (
		<>
			<div class="top">
				<div>
					<h1>Clients</h1>
					<p>Gérez votre base client</p>
				</div>
			</div>
			<div class="statistiques">
				<div>
					<div>
						<p>Total clients</p>
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
							class="lucide lucide-users-icon lucide-users"
						>
							<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
							<path d="M16 3.128a4 4 0 0 1 0 7.744" />
							<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
							<circle cx="9" cy="7" r="4" />
						</svg>
					</div>
					<div>
						247
					</div>
					<div>
						<p>+12% depuis le mois dernier</p>
					</div>
				</div>
				<div>
					<div>
						<p>Nouveaux ce mois</p>
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
							class="lucide lucide-user-plus-icon lucide-user-plus"
						>
							<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
							<circle cx="9" cy="7" r="4" />
							<line x1="19" x2="19" y1="8" y2="14" />
							<line x1="22" x2="16" y1="11" y2="11" />
						</svg>
					</div>
					<div>
						18
					</div>
					<div>
						<p>+8% depuis le mois dernier</p>
					</div>
				</div>
				<div>
					<div>
						<p>RDV moyens/client</p>
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
							<path d="M8 2v4" />
							<path d="M16 2v4" />
							<rect width="18" height="18" x="3" y="4" rx="2" />
							<path d="M3 10h18" />
						</svg>
					</div>
					<div>
						3.2
					</div>
					<div>
						<p>+0.4 depuis le mois dernier</p>
					</div>
				</div>
				<div>
					<div>
						<p>Satisfaction moyenne</p>
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
							class="lucide lucide-star-icon lucide-star"
						>
							<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
						</svg>
					</div>
					<div>
						4.8
					</div>
					<div>
						<p>+0.2 depuis le mois dernier</p>
					</div>
				</div>
			</div>
			<div class="clients-list">
				<div>
					<h3>Liste des clients</h3>
					<p>5 clients</p>
				</div>
				<div class="list">
					<div class="client-header">
						<p>Client</p>
						<p>Contact</p>
						<p>Dernière visite</p>
						<p>Visites</p>
						<p>Total dépensé</p>
						<p>Statut</p>
					</div>
					<div class="client">
						<div>
							<img src="https://placehold.co/32x32" alt="profil-image" />
							<p>Marie Dubois</p>
						</div>

						<div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-mail-icon lucide-mail"
								>
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
									<rect x="2" y="4" width="20" height="16" rx="2" />
								</svg>
								<p>marie.dubois@email.com</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-phone-icon lucide-phone"
								>
									<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
								</svg>
								<p>06 12 34 56 78</p>
							</div>
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
								class="lucide lucide-calendar-icon lucide-calendar"
							>
								<path d="M8 2v4" />
								<path d="M16 2v4" />
								<rect width="18" height="18" x="3" y="4" rx="2" />
								<path d="M3 10h18" />
							</svg>
							<p>10/07/2024</p>
						</div>

						<div>
							<p>12</p>
						</div>

						<div>
							<p>480€</p>
						</div>

						<div>
							<p class="vip">VIP</p>
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
								class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
							>
								<circle cx="12" cy="12" r="1" />
								<circle cx="12" cy="5" r="1" />
								<circle cx="12" cy="19" r="1" />
							</svg>
						</div>
					</div>
					<div class="client">
						<div>
							<img src="https://placehold.co/32x32" alt="profil-image" />
							<p>Pierre Martin</p>
						</div>

						<div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-mail-icon lucide-mail"
								>
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
									<rect x="2" y="4" width="20" height="16" rx="2" />
								</svg>
								<p>pierre.martin@email.com</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-phone-icon lucide-phone"
								>
									<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
								</svg>
								<p>06 98 76 54 32</p>
							</div>
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
								class="lucide lucide-calendar-icon lucide-calendar"
							>
								<path d="M8 2v4" />
								<path d="M16 2v4" />
								<rect width="18" height="18" x="3" y="4" rx="2" />
								<path d="M3 10h18" />
							</svg>
							<p>08/07/2024</p>
						</div>

						<div>
							<p>5</p>
						</div>

						<div>
							<p>200€</p>
						</div>

						<div>
							<p class="regulier">Régulier</p>
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
								class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
							>
								<circle cx="12" cy="12" r="1" />
								<circle cx="12" cy="5" r="1" />
								<circle cx="12" cy="19" r="1" />
							</svg>
						</div>
					</div>
					<div class="client">
						<div>
							<img src="https://placehold.co/32x32" alt="profil-image" />
							<p>Sophie Laurent</p>
						</div>

						<div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-mail-icon lucide-mail"
								>
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
									<rect x="2" y="4" width="20" height="16" rx="2" />
								</svg>
								<p>sophie.laurent@email.com</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-phone-icon lucide-phone"
								>
									<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
								</svg>
								<p>06 11 22 33 44</p>
							</div>
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
								class="lucide lucide-calendar-icon lucide-calendar"
							>
								<path d="M8 2v4" />
								<path d="M16 2v4" />
								<rect width="18" height="18" x="3" y="4" rx="2" />
								<path d="M3 10h18" />
							</svg>
							<p>05/07/2024</p>
						</div>

						<div>
							<p>8</p>
						</div>

						<div>
							<p>320€</p>
						</div>

						<div>
							<p class="regulier">Régulier</p>
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
								class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
							>
								<circle cx="12" cy="12" r="1" />
								<circle cx="12" cy="5" r="1" />
								<circle cx="12" cy="19" r="1" />
							</svg>
						</div>
					</div>
					<div class="client">
						<div>
							<img src="https://placehold.co/32x32" alt="profil-image" />
							<p>Thomas Dubois</p>
						</div>

						<div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-mail-icon lucide-mail"
								>
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
									<rect x="2" y="4" width="20" height="16" rx="2" />
								</svg>
								<p>thomas.dubois@email.com</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-phone-icon lucide-phone"
								>
									<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
								</svg>
								<p>06 55 66 77 88</p>
							</div>
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
								class="lucide lucide-calendar-icon lucide-calendar"
							>
								<path d="M8 2v4" />
								<path d="M16 2v4" />
								<rect width="18" height="18" x="3" y="4" rx="2" />
								<path d="M3 10h18" />
							</svg>
							<p>28/06/2024</p>
						</div>

						<div>
							<p>2</p>
						</div>

						<div>
							<p>80€</p>
						</div>

						<div>
							<p class="nouveau">Nouveau</p>
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
								class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
							>
								<circle cx="12" cy="12" r="1" />
								<circle cx="12" cy="5" r="1" />
								<circle cx="12" cy="19" r="1" />
							</svg>
						</div>
					</div>
					<div class="client">
						<div>
							<img src="https://placehold.co/32x32" alt="profil-image" />
							<p>Julie Moreau</p>
						</div>

						<div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-mail-icon lucide-mail"
								>
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
									<rect x="2" y="4" width="20" height="16" rx="2" />
								</svg>
								<p>julie.moreau@email.com</p>
							</div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-phone-icon lucide-phone"
								>
									<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
								</svg>
								<p>06 44 33 22 11</p>
							</div>
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
								class="lucide lucide-calendar-icon lucide-calendar"
							>
								<path d="M8 2v4" />
								<path d="M16 2v4" />
								<rect width="18" height="18" x="3" y="4" rx="2" />
								<path d="M3 10h18" />
							</svg>
							<p>12/07/2024</p>
						</div>

						<div>
							<p>15</p>
						</div>

						<div>
							<p>750€</p>
						</div>

						<div>
							<p class="vip">VIP</p>
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
								class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
							>
								<circle cx="12" cy="12" r="1" />
								<circle cx="12" cy="5" r="1" />
								<circle cx="12" cy="19" r="1" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Slick.Page;
