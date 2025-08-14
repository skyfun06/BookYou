import * as Slick from "@webtools/slick-server";

export default {
    url: "/dashboard/clients",
    template: "dashboard",

    title: "",

    styles: [
        "/styles/dashboard/dashboard.css",
    ],
    scripts: [],

    head: <></>,
    body: (
        <>
             
        </>
    ),

    onpost: null,
    onrequest: null,
} satisfies Slick.Page;
