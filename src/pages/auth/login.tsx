import * as Slick from "@webtools/slick-server";

export default {
	url: "/auth/login",
	template: "auth",

	title: "",

	styles: [
		"/styles/auth/login.css",
	],
	scripts: [],

	head: <></>,
	body: (
		<>
			<div>
				<a href="#">
					<img src="/favicon.webp" alt="logo" width="30" height="30" />
					BookYou
				</a>
				<p>Connectez-vous à votre compte</p>
			</div>
			<div id="login">
				<div>
					<div>
						<p>Connexion</p>
						<p>Entrez vos identifiants pour accéder à votre agenda</p>
					</div>
					<div>
						<div>
							<label>Email</label>
							<input type="text" placeholder="votre@email.com" />
						</div>
						<div>
							<label>Mot de passe</label>
							<input type="password" placeholder="••••••••" />
						</div>
					</div>
					<div class="wrapper">
						<label class="checkbox-container">
							<input type="checkbox" />
							<span class="custom-checkbox"></span>
							<span class="remember">Se souvenir de moi</span>
						</label>

						<a href="#" class="forgot-link">Mot de passe oublié ?</a>
					</div>
					<button type="button" class="login-button">Se connecter</button>
					<p class="no-account">
						Pas encore de compte ?
						<a href="/auth/onboarding">Créer un compte</a>
					</p>
				</div>
			</div>
		</>
	),

	onpost: null,
	onrequest: null,
} satisfies Slick.Page;
