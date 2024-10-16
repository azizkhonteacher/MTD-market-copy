// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "nuxt-primevue",
  ],
  i18n: {
    lazy: true,
    langDir: "./locales",
    locales: [
      {
        code: "uz",
        name: "Uz",
        file: "uzb.json",
      },
      {
        code: "ru",
        name: "Ru",
        file: "rus.json",
      },
      {
        code: "en",
        name: "En",
        file: "eng.json",
      },
    ],
    defaultLocale: "uz",
    strategy: "prefix_except_default",
  },
  css: [
    "primevue/resources/themes/lara-light-teal/theme.css", // PrimeIcons (for icons)
    "~/assets/styles/main.scss",
  ],
  build: {
    transpile: ["primevue"],
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
