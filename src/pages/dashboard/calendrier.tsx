import * as Slick from "@webtools/slick-server";

export default {
	url: "/dashboard/calendrier",
	template: "dashboard",

	title: "",

	styles: [
		"/styles/dashboard/calendrier.css",
	],
	scripts: [
		"/scripts/dashboard/calendrier.ts",
	],

	head: (
		<></>
	),
	body: (
		<>
			<h1>Calendrier</h1>
			<p>Gérez vos rendez-vous et votre planning</p>
			<div>
				<div class="planning">
					<div>
						<h2>Planning mensuel</h2>
						<div>
							<button type="button" class="aujourdhui">Aujourd'hui</button>
							<button type="button" class="new-rdv">+ Nouveau RDV</button>
						</div>
					</div>
					<div class="calender">
						<div class="select-years">
							<button type="button" id="prevBtn">
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
									class="lucide lucide-chevron-left-icon lucide-chevron-left"
								>
									<path d="m15 18-6-6 6-6" />
								</svg>
							</button>
							<div class="monthYear" id="monthYear"></div>
							<button type="button" id="nextBtn">
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
									class="lucide lucide-chevron-right-icon lucide-chevron-right"
								>
									<path d="m9 18 6-6-6-6" />
								</svg>
							</button>
						</div>
						<div class="days">
							<div class="day">Mon</div>
							<div class="day">Tue</div>
							<div class="day">Wed</div>
							<div class="day">Thu</div>
							<div class="day">Fri</div>
							<div class="day">Sat</div>
							<div class="day">Sun</div>
						</div>
						<div class="dates" id="dates">
						</div>
					</div>
					<span>●</span>jour avec RDV
				</div>
				<div class="rdv-today">
					<div>
						<h2>
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
								class="lucide lucide-clock-icon lucide-clock"
							>
								<path d="M12 6v6l4 2" />
								<circle cx="12" cy="12" r="10" />
							</svg>
							Rendez-vous du jour
						</h2>
						<p>lundi 1 septembre • 5 RDV</p>
					</div>
					<div>
						<div class="rdv">
							<div>
								<div>
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
										class="lucide lucide-clock-icon lucide-clock"
									>
										<path d="M12 6v6l4 2" />
										<circle cx="12" cy="12" r="10" />
									</svg>
									09:00 (1h)
								</div>
								<div>
									<p>Confirmé</p>
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
										class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
									>
										<circle cx="12" cy="12" r="1" />
										<circle cx="12" cy="5" r="1" />
										<circle cx="12" cy="19" r="1" />
									</svg>
								</div>
							</div>
							<div>
								<div>
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
										class="lucide lucide-user-icon lucide-user"
									>
										<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
										<circle cx="12" cy="7" r="4" />
									</svg>
									<p>Marie Dubois</p>
								</div>
								<p>Coupe + Brushing</p>
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
											class="lucide lucide-phone-icon lucide-phone"
										>
											<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
										</svg>
										06 12 34 56 78
									</p>
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
											class="lucide lucide-mail-icon lucide-mail"
										>
											<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
											<rect x="2" y="4" width="20" height="16" rx="2" />
										</svg>
										marie.dubois@email.com
									</p>
								</div>
							</div>
						</div>
						<div class="rdv">
							<div>
								<div>
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
										class="lucide lucide-clock-icon lucide-clock"
									>
										<path d="M12 6v6l4 2" />
										<circle cx="12" cy="12" r="10" />
									</svg>
									09:00 (1h)
								</div>
								<div>
									<p>Confirmé</p>
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
										class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
									>
										<circle cx="12" cy="12" r="1" />
										<circle cx="12" cy="5" r="1" />
										<circle cx="12" cy="19" r="1" />
									</svg>
								</div>
							</div>
							<div>
								<div>
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
										class="lucide lucide-user-icon lucide-user"
									>
										<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
										<circle cx="12" cy="7" r="4" />
									</svg>
									<p>Marie Dubois</p>
								</div>
								<p>Coupe + Brushing</p>
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
											class="lucide lucide-phone-icon lucide-phone"
										>
											<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
										</svg>
										06 12 34 56 78
									</p>
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
											class="lucide lucide-mail-icon lucide-mail"
										>
											<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
											<rect x="2" y="4" width="20" height="16" rx="2" />
										</svg>
										marie.dubois@email.com
									</p>
								</div>
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
