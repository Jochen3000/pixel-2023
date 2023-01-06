// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/css/pixel-berlin.webflow.css",
    "@/assets/css/normalize.css",
    "@/assets/css/webflow.css",
    "@/assets/css/style.css",
  ],
  runtimeConfig: {
    public: {
      baseUrl: "some value",
    },
  },
  app: {
    head: {
      title: "Pixel Berlin",
      script: [
        {
          src: "http://localhost:3000/custom.js",
          defer: true,
        },
      ],
    },
  },
});
