import { Slick } from "@webtools/slick-server";

export const env = {
	API_URL: Deno.env.get("API_URL")!,
};

const slick = new Slick(import.meta.dirname!, {
	env,
	lang: "fr",
	client: true,
});

await slick.start();
