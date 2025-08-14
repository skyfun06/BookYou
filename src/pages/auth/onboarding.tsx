import * as Slick from "@webtools/slick-server";

export default {
	url: "/auth/onboarding",
	template: "auth",

	title: "",

	styles: [
		"/styles/auth/onboarding.css",
	],
	scripts: [
		"/scripts/auth/onboarding.ts"
	],

	head: <></>,
	body: (
		<>
			<div class="head">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.25"
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
				<h1>
					Rejoignez <span>BookYou</span>
				</h1>
				<p>Créez votre agenda en ligne en quelques minutes</p>
				<div>
					<p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-building2-icon lucide-building-2"
						>
							<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
							<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
							<path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
							<path d="M10 6h4" />
							<path d="M10 10h4" />
							<path d="M10 14h4" />
							<path d="M10 18h4" />
						</svg>
						Entreprise
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-arrow-right"
					>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
					<p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-settings-icon lucide-settings"
						>
							<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
							<circle cx="12" cy="12" r="3" />
						</svg>
						Paramètres
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-arrow-right"
					>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
					<p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-user-icon lucide-user"
						>
							<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
							<circle cx="12" cy="7" r="4" />
						</svg>
						Compte
					</p>
				</div>
			</div>
			<div id="step-1" class="step">
				<div>
					<div>
						<p>Votre entreprise</p>
						<p>Parlez-nous de votre activité professionnelle</p>
					</div>
					<form>
						<div>
							<label>Nom de votre entreprise *</label>
							<input
								type="text"
								name="nomEntreprise"
								id="nomEntreprise"
								placeholder="ex: Salon Marie, Cabinet Dr.Martin..."
							/>
						</div>
						<div>
							<label>Votre métier *</label>
							<input
								type="text"
								name="metier"
								id="metier"
								placeholder="ex: Coiffeur, Ostéopathe, Coach sportif..."
							/>
						</div>
						<div>
							<label>Description de votre activité (optionnel)</label>
							<textarea
								name="descriptionMetier"
								id="descriptionMetier"
								placeholder="Décrivez brièvement vos services..."
							>
							</textarea>
						</div>
					</form>
					<div>
						<button type="button" class="btn-next">Suivant</button>
					</div>
				</div>
			</div>
			<div id="step-2" class="step">
				<div>
					<div>
						<p>Vos paramètres</p>
						<p>Configurez votre agenda selon vos besoins</p>
					</div>
					<form>
						<div>
							<p>
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
									class="lucide lucide-credit-card-icon lucide-credit-card"
								>
									<rect width="20" height="14" x="2" y="5" rx="2" />
									<line x1="2" x2="22" y1="10" y2="10" />
								</svg>
								Paiement et réservation
							</p>
							<div>
								<div>
									<div>
										<p>Paiement en ligne</p>
										<p>Permettre aux clients de payer directement lors de la réservation</p>
									</div>
									<input type="checkbox" id="check1" class="check" />
									<label for="check1" class="button"></label>
								</div>
								<div>
									<div>
										<p>Paiement en ligne</p>
										<p>Permettre aux clients de payer directement lors de la réservation</p>
									</div>
									<input type="checkbox" id="check2" class="check" />
									<label for="check2" class="button"></label>
								</div>
								<div>
									<div>
										<p>Paiement en ligne</p>
										<p>Permettre aux clients de payer directement lors de la réservation</p>
									</div>
									<input type="checkbox" id="check3" class="check" />
									<label for="check3" class="button"></label>
								</div>
							</div>
						</div>
						<div>
							<p>
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
									class="lucide lucide-bell-icon lucide-bell"
								>
									<path d="M10.268 21a2 2 0 0 0 3.464 0" />
									<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
								</svg>
								Notifications
							</p>
							<div>
								<div>
									<div>
										<p>Notifications email</p>
										<p>Recevoir les notifications par email</p>
									</div>
									<input type="checkbox" id="check4" class="check" />
									<label for="check4" class="button"></label>
								</div>
								<div>
									<div>
										<p>Notifications SMS</p>
										<p>Recevoir les notifications par SMS</p>
									</div>
									<input type="checkbox" id="check5" class="check" />
									<label for="check5" class="button"></label>
								</div>
							</div>
						</div>
					</form>
					<div class="stepBot">
						<button type="button" class="btn-prev">Précédent</button>
						<button type="button" class="btn-next">Suivant</button>
					</div>
				</div>
			</div>
			<div id="step-3" class="step">
				<div>
					<div>
						<p>Votre compte</p>
						<p>Créez votre compte pour finaliser</p>
					</div>
					<form>
						<div>
							<div>
								<label class="labelInput">Prénom *</label>
								<div class="divInput">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
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
									<input type="text" placeholder="Votre prénom" />
								</div>
							</div>
							<div>
								<label class="labelInput">Nom *</label>
								<div class="divInput">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
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
									<input type="text" placeholder="Votre nom" />
								</div>
							</div>
						</div>
						<div>
							<label class="labelInput">Adresse email *</label>
							<div class="divInput">
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
									class="lucide lucide-mail-icon lucide-mail"
								>
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
									<rect x="2" y="4" width="20" height="16" rx="2" />
								</svg>
								<input type="text" placeholder="votre@email.com" />
							</div>
						</div>
						<div>
							<label class="labelInput">Mot de passe *</label>
							<div class="divInput">
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
									class="lucide lucide-lock-icon lucide-lock"
								>
									<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
									<path d="M7 11V7a5 5 0 0 1 10 0v4" />
								</svg>
								<input type="password" placeholder="Votre mot de passe" />
							</div>
							<p>Au moins 8 caractères avec lettres et chiffres</p>
						</div>
						<div>
							<label class="labelInput">Confirmer le mot de passe *</label>
							<div class="divInput">
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
									class="lucide lucide-lock-icon lucide-lock"
								>
									<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
									<path d="M7 11V7a5 5 0 0 1 10 0v4" />
								</svg>
								<input type="password" placeholder="Confirmez votre mot de passe" />
							</div>
						</div>
						<div>
							<div class="custom-checkbox-wrapper">
								<label class="custom-checkbox">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
								<label class="checkbox-text">
									J'accepte les
									<a href="#">conditions générales d'utilisation</a>
									et la
									<a href="#">politique de confidentialité</a>
									de BookYou *
								</label>
							</div>

							<div class="custom-checkbox-wrapper">
								<label class="custom-checkbox">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
								<label class="checkbox-text">
									Je souhaite recevoir les conseils et actualités de BookYou par email
								</label>
							</div>
						</div>
					</form>
					<div class="stepBot">
						<button type="button" class="btn-prev">Précédent</button>
						<button type="button">🔵 Créer mon compte</button>
					</div>
				</div>
			</div>
			<div id="bot">
				<p>
					Vous avez déjà un compte ?<a href="/auth/login">Se connecter</a>
				</p>
			</div>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Slick.Page;
