export default {
  mode: "universal",
  head: {
    title: "Spectrum",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=block"
      }
    ]
  },
  loading: { color: "#fff" },
  pageTransition: "fade",
  css: ["./style/main.scss"],
  modules: ["@nuxtjs/axios"]
};
