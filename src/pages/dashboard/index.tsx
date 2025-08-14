import * as Slick from "@webtools/slick-server";

export default {
	url: "/dashboard",
	template: "dashboard",

	title: "",

	styles: [
		"/styles/dashboard/index.css",
	],
	scripts: [],

	head: <></>,
	body: (
		<>
			<div class="top">
				<h1>Tableau de bord</h1>
				<p>Aperçu de votre activité</p>
			</div>
			<div>
				<div>
					<div>
						<p>RDV Aujourd'hui</p>
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
						8
					</div>
					<div>
						<p>2 en attente</p>
						<p>+2 vs hier</p>
					</div>
				</div>
				<div>
					<div>
						<p>RDV Aujourd'hui</p>
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
						8
					</div>
					<div>
						<p>2 en attente</p>
						<p>+2 vs hier</p>
					</div>
				</div>
				<div>
					<div>
						<p>RDV Aujourd'hui</p>
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
						8
					</div>
					<div>
						<p>2 en attente</p>
						<p>+2 vs hier</p>
					</div>
				</div>
				<div>
					<div>
						<p>RDV Aujourd'hui</p>
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
						8
					</div>
					<div>
						<p>2 en attente</p>
						<p>+2 vs hier</p>
					</div>
				</div>
			</div>
			<div>
				<div id="book-today">
					<div>
						<h3>
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
							Rendez-vous d'aujourd'hui
						</h3>
					</div>
					<div>
						<div>
							<div>
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
										class="lucide lucide-clock-icon lucide-clock"
									>
										<path d="M12 6v6l4 2" />
										<circle cx="12" cy="12" r="10" />
									</svg>
									<p>09:00</p>
								</div>
								<div>
									<p>
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
											class="lucide lucide-user-icon lucide-user"
										>
											<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
											<circle cx="12" cy="7" r="4" />
										</svg>
										Sophie Martin
									</p>
									<p>Coupe + Couleur • 2h</p>
								</div>
							</div>
							<div>
								<p>confirmé</p>
							</div>
						</div>
						<div>
							<div>
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
										class="lucide lucide-clock-icon lucide-clock"
									>
										<path d="M12 6v6l4 2" />
										<circle cx="12" cy="12" r="10" />
									</svg>
									<p>09:00</p>
								</div>
								<div>
									<p>
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
											class="lucide lucide-user-icon lucide-user"
										>
											<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
											<circle cx="12" cy="7" r="4" />
										</svg>
										Sophie Martin
									</p>
									<p>Coupe + Couleur • 2h</p>
								</div>
							</div>
							<div>
								<p>confirmé</p>
							</div>
						</div>
						<div>
							<div>
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
										class="lucide lucide-clock-icon lucide-clock"
									>
										<path d="M12 6v6l4 2" />
										<circle cx="12" cy="12" r="10" />
									</svg>
									<p>09:00</p>
								</div>
								<div>
									<p>
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
											class="lucide lucide-user-icon lucide-user"
										>
											<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
											<circle cx="12" cy="7" r="4" />
										</svg>
										Sophie Martin
									</p>
									<p>Coupe + Couleur • 2h</p>
								</div>
							</div>
							<div>
								<p class="waiting">en attente</p>
							</div>
						</div>
						<div>
							<div>
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
										class="lucide lucide-clock-icon lucide-clock"
									>
										<path d="M12 6v6l4 2" />
										<circle cx="12" cy="12" r="10" />
									</svg>
									<p>09:00</p>
								</div>
								<div>
									<p>
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
											class="lucide lucide-user-icon lucide-user"
										>
											<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
											<circle cx="12" cy="7" r="4" />
										</svg>
										Sophie Martin
									</p>
									<p>Coupe + Couleur • 2h</p>
								</div>
							</div>
							<div>
								<p>confirmé</p>
							</div>
						</div>
					</div>
				</div>
				<div id="last-activity">
					<div>
						<h3>
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
								class="lucide lucide-activity-icon lucide-activity"
							>
								<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
							</svg>
							Activité récente
						</h3>
					</div>
					<div>
						<div>
							<div>
								<div>
									<svg
										class="vert"
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
									<p>Nouveau rendez-vous</p>
									<p>Sophie Martin - Coupe + Couleur</p>
								</div>
							</div>
							<div>
								<p>Il y a 2h</p>
							</div>
						</div>
						<div>
							<div>
								<div>
									<svg
										class="bleu"
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
										<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<line x1="19" x2="19" y1="8" y2="14" />
										<line x1="22" x2="16" y1="11" y2="11" />
									</svg>
								</div>
								<div>
									<p>Nouveau client</p>
									<p>Emma Leblanc s'est inscrite</p>
								</div>
							</div>
							<div>
								<p>Il y a 2h</p>
							</div>
						</div>
						<div>
							<div>
								<div>
									<svg
										class="rouge"
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
										<circle cx="12" cy="12" r="10" />
										<path d="M8 12h8" />
										<path d="M12 8v8" />
									</svg>
								</div>
								<div>
									<p>Annulation</p>
									<p>Julie Moreau - RDV de 15h30</p>
								</div>
							</div>
							<div>
								<p>Il y a 2h</p>
							</div>
						</div>
						<div>
							<div>
								<div>
									<svg
										class="orange"
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
										<path d="M12 6v6l4 2" />
										<circle cx="12" cy="12" r="10" />
									</svg>
								</div>
								<div>
									<p>Rendez-vous modifié</p>
									<p>Pierre Durand - Reporté à demain</p>
								</div>
							</div>
							<div>
								<p>Il y a 2h</p>
							</div>
						</div>
						<div>
							<div>
								<div>
									<svg
										class="vert"
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
									<p>Nouveau rendez-vous</p>
									<p>Thomas Rey - Coupe + Barbe</p>
								</div>
							</div>
							<div>
								<p>Il y a 2h</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Slick.Page;
