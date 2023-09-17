export default defineNuxtConfig({
  modules: ["@nuxtjs/eslint-module", "nuxt-swiper"],
  eslint: {},
  app: {
    head: {
      title: "Retraining for accountants",
      meta: [{ name: "description", content: "Retraining for accountants" }],
    },
  },
});
