// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/node_modules/weather-icons/css/weather-icons.min.css'],
  modules: ["@nuxtjs/tailwindcss", "dayjs-nuxt"],
  compatibilityDate: "2025-03-19",
});