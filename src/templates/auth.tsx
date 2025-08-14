import * as Slick from "@webtools/slick-server";

export default {
	name: "auth",
	favicon: "/favicon.ico",

	styles: [
		"/styles/reset.css",
		"/styles/auth.css",
	],
	scripts: [],

	head: <></>,
	body: (
		<>
			<div id="app"></div>
		</>
	),

	onrequest: null,
} satisfies Slick.Template;
