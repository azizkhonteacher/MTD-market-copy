// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@pinia/nuxt",
  ],
  css: ["~/assets/styles/main.scss"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
