export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "fr"
    },
    title: "catherinelapsy",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Catherine la psy vous fait découvrir la psychologie comme vous ne l'avez jamais vue."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@aceforth/nuxt-netlify",
    "@aceforth/nuxt-optimized-images",
    "nuxt-compress",
    [
      "@nuxtjs/google-fonts",
      {
        display: "swap",
        families: {
          Quicksand: true,
          Philosopher: true,
          "Fredericka+the+Great": true,
          "Lexend+Deca": true,
          "Just+Another+Hand": true,
          Thasadith: true,
          Literata: true,
          "Tenor+Sans": true,
          "Julius+Sans+One": true,
          Spartan: true
        }
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "nuxt-cookie-control",
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  googleAnalytics: {
    id: "G-JFDNW9JFSX"
  },

  purgeCSS: {
    whitelist: ["bg-rose-600"]
  }
};
