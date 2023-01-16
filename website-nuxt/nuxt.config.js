// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    "@/assets/css/normalize.css",
    "@/assets/css/webflow.css",
    "@/assets/css/pixel-berlin.webflow.css",
    "@/assets/css/style.css",
  ],
  runtimeConfig: {
    public: {
      baseUrl: "some value",
    },
  },
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "cu7fj6fr",
    apiVersion: "2023-01-16",
  },
  app: {
    head: {
      title: "Pixel Berlin",
    },
  },
});
