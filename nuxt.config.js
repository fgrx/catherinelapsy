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
    whitelist: ["bg-rose-600", "bg-gray-400"]
  },

  cookies: {
    necessary: [],
    optional: [
      {
        name: "Google Analitycs",
        identifier: "G-JFDNW9JFSX",
        description:
          "Nous utilisons l'outil Google Analytics à des fins statistiques afin d'améliorer nos services.",

        initialState: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-JFDNW9JFSX",
        async: true,
        cookies: ["_ga", "_gat", "_gid"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js"
          });
        },
        declined: () => {}
      }
    ]
  }
};
