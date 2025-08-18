import * as Slick from "@webtools/slick-server";

export default {
	url: "/dashboard/prestations",
	template: "dashboard",

	title: "",

	styles: [
		"/styles/dashboard/prestations.css",
	],
	scripts: [
		"/scripts/dashboard/prestation.ts"
	],

	head: <></>,
	body: (
		<>
			<div class="top">
				<div>
					<h1>Prestations</h1>
					<p>Gérez vos services et tarifs</p>
				</div>
			</div>
			<div class="statistiques">
				<div>
					<div>
						<p>Total Prestations</p>
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
							class="lucide lucide-wrench-icon lucide-wrench"
						>
							<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
						</svg>
					</div>
					<div>
						12
					</div>
					<div>
						<p>+2 ce mois</p>
					</div>
				</div>
				<div>
					<div>
						<p>Plus Populaire</p>
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
							class="lucide lucide-trending-up-icon lucide-trending-up"
						>
							<path d="M16 7h6v6" />
							<path d="m22 7-8.5 8.5-5-5L2 17" />
						</svg>
					</div>
					<div>
						Coupe Homme
					</div>
					<div>
						<p>45% des RDV</p>
					</div>
				</div>
				<div>
					<div>
						<p>Durée Moyenne</p>
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
					</div>
					<div>
						45 min
					</div>
					<div>
						<p>Stable</p>
					</div>
				</div>
				<div>
					<div>
						<p>Tarif moyen</p>
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
							class="lucide lucide-euro-icon lucide-euro"
						>
							<path d="M4 10h12" />
							<path d="M4 14h9" />
							<path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
						</svg>
					</div>
					<div>
						35 €
					</div>
					<div>
						<p>+5% ce mois</p>
					</div>
				</div>
			</div>
			<div class="prestation-list">
				<div>
					<h3>Liste des Prestations</h3>
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
								class="lucide lucide-search-icon lucide-search"
							>
								<path d="m21 21-4.34-4.34" />
								<circle cx="11" cy="11" r="8" />
							</svg>
							<input type="search" placeholder="Rechercher une préstation..." />
						</div>
						<button type="button" class="new-prestation" id="openModalBtn">
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
								class="lucide lucide-plus-icon lucide-plus"
							>
								<path d="M5 12h14" />
								<path d="M12 5v14" />
							</svg>
							Nouvelle prestation
						</button>
					</div>
				</div>
				<div class="list">
					<div class="top-list">
						<p>Nom</p>
						<p>Popularité</p>
						<p>Durée</p>
						<p>Prix</p>
						<p>Statut</p>
						<p>Actions</p>
					</div>
					<div class="prestation">
						<div>
							<p>Coupe Homme</p>
							<p>Coupe classique avec shampoing</p>
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
								class="lucide lucide-trending-up-icon lucide-trending-up"
							>
								<path d="M16 7h6v6" />
								<path d="m22 7-8.5 8.5-5-5L2 17" />
							</svg>
							<p>
								<span>24</span>réservations
							</p>
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
								class="lucide lucide-clock-icon lucide-clock"
							>
								<path d="M12 6v6l4 2" />
								<circle cx="12" cy="12" r="10" />
							</svg>
							<p>30 min</p>
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
								class="lucide lucide-euro-icon lucide-euro"
							>
								<path d="M4 10h12" />
								<path d="M4 14h9" />
								<path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
							</svg>
							<p>25</p>
						</div>

						<div>
							<p class="actif">Actif</p>
						</div>

						<button type="button" class="menu-prestation">
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
						</button>
					</div>
					<div class="prestation">
						<div>
							<p>Coupe + Barbe</p>
							<p>Coupe complète avec taille de barbe</p>
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
								class="lucide lucide-trending-up-icon lucide-trending-up"
							>
								<path d="M16 7h6v6" />
								<path d="m22 7-8.5 8.5-5-5L2 17" />
							</svg>
							<p>
								<span>18</span>réservations
							</p>
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
								class="lucide lucide-clock-icon lucide-clock"
							>
								<path d="M12 6v6l4 2" />
								<circle cx="12" cy="12" r="10" />
							</svg>
							<p>45 min</p>
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
								class="lucide lucide-euro-icon lucide-euro"
							>
								<path d="M4 10h12" />
								<path d="M4 14h9" />
								<path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
							</svg>
							<p>35</p>
						</div>

						<div>
							<p class="actif">Actif</p>
						</div>

						<button type="button" class="menu-prestation">
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
						</button>
					</div>
					<div class="prestation">
						<div>
							<p>Coloration</p>
							<p>Coloration complète avec soin</p>
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
								class="lucide lucide-trending-up-icon lucide-trending-up"
							>
								<path d="M16 7h6v6" />
								<path d="m22 7-8.5 8.5-5-5L2 17" />
							</svg>
							<p>
								<span>8</span>réservations
							</p>
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
								class="lucide lucide-clock-icon lucide-clock"
							>
								<path d="M12 6v6l4 2" />
								<circle cx="12" cy="12" r="10" />
							</svg>
							<p>120 min</p>
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
								class="lucide lucide-euro-icon lucide-euro"
							>
								<path d="M4 10h12" />
								<path d="M4 14h9" />
								<path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
							</svg>
							<p>80</p>
						</div>

						<div>
							<p class="actif">Actif</p>
						</div>

						<button type="button" class="menu-prestation">
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
						</button>
					</div>
					<div class="prestation">
						<div>
							<p>Shampoing Soin</p>
							<p>Lavage avec soin hydratant</p>
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
								class="lucide lucide-trending-up-icon lucide-trending-up"
							>
								<path d="M16 7h6v6" />
								<path d="m22 7-8.5 8.5-5-5L2 17" />
							</svg>
							<p>
								<span>12</span>réservations
							</p>
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
								class="lucide lucide-clock-icon lucide-clock"
							>
								<path d="M12 6v6l4 2" />
								<circle cx="12" cy="12" r="10" />
							</svg>
							<p>20 min</p>
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
								class="lucide lucide-euro-icon lucide-euro"
							>
								<path d="M4 10h12" />
								<path d="M4 14h9" />
								<path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
							</svg>
							<p>15</p>
						</div>

						<div>
							<p class="inactif">Inactif</p>
						</div>

						<button type="button" class="menu-prestation">
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
						</button>
					</div>
				</div>
			</div>
			<div id="modal" class="hidden">
				<div>
					<h2>Nouvelle Prestation</h2>
					<button type="button" class="closeBtn" >
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
							class="lucide lucide-x-icon lucide-x"
						>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				</div>
                <form id="prestationForm">
                    <div>
                        <label>Nom de la prestation</label>
                        <input type="text" placeholder="Ex: Coupe Homme..." name="prestation-name" id="prestation-name" />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea name="prestation-description" id="prestation-description" placeholder="Décrivez votre préstation..."></textarea>
                    </div>
                    <div>   
                        <div>
                            <label>Durée (min)</label>
                            <input type="number" name="prestation-duree" id="prestation-duree" placeholder="30" />
                        </div>
                        <div>
                            <label>Prix (€)</label>
                            <input type="number" name="prestation-prix" id="prestation-prix" placeholder="0" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Prestation active</p>
                            <p>La prestation sera disponible à la réservation</p>
                        </div>
                        <div class="container" >
							<input type="checkbox" id="check" />
							<label for="check" class="button"></label>
						</div>
                    </div>
                    <div>
                        <button type="button" id="closeModalBtn">Annuler</button>
                        <button type="submit">Créer la préstation</button>
                    </div>
                </form>
			</div>
			<div id="overlay" class="hidden"></div>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Slick.Page;
