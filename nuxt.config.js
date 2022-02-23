import getRoutes from "./utils/getRoutes";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "fr",
    },
    title: "Catherine La Psy",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Catherine la psy vulgarise la psychologie et propose des ateliers en ligne pour les professionnels et particuliers.",
      },
      { name: "theme-color", content: "#07835f" },
      { name: "og:title", content: "catherine La Psy" },
      { name: "og:type", content: "article" },
      { name: "og:site_name", content: "catherine La Psy" },
      {
        name: "og:description",
        content:
          "Catherine la psy vulgarise la psychologie et propose des ateliers en ligne pour les professionnels et particuliers.",
      },
    ],
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
    "nuxt-compress",
    "@nuxtjs/google-analytics",
    [
      "@nuxtjs/google-fonts",
      {
        display: "swap",
        families: {
          "Lexend+Deca": true,
          "Playfair+Display:ital,wght@0,700;1,700": true,
        },
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-cookie-control",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
  },

  pwa: {
    meta: {
      theme_color: "#07835f",
    },
  },

  image: {
    ipx: {
      /**
       * Input directory for images
       **/
      dir: "~/static",
      /**
       * Cache directory for optimized images
       **/
      cacheDir: "~~/node_modules/.cache/nuxt-image",
      /**
       * Enable/Disable cache cleaning cron job
       **/
      clearCache: false,
      format: "webp",
      /**
       * Modify default behavior of image optimizer
       **/
      sharp: {
        // Here is complete list of available options: https://github.com/lovell/sharp/blob/master/lib/constructor.js#L132
      },
    },
    sizes: [320, 420, 768, 1024, 1200],
  },

  sitemap: {
    hostname: "https://catherinelapsy.com",
    gzip: true,
    exclude: ["/admin/**"],
    routes() {
      return getRoutes();
    },
  },

  googleAnalytics: {
    id: "G-JFDNW9JFSX",
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
            event: "gtm.js",
          });
        },
        declined: () => {},
      },
    ],
  },
};
