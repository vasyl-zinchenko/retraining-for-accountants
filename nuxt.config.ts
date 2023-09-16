export default defineNuxtConfig({
  modules: ["@nuxtjs/eslint-module", "nuxt-swiper"],
  eslint: {},
  generate: {
    nojekyll: true, //not working on this version
    fallback: "404.html",
  },
  ssr: false, //When false
  target: "static", // and static, nuxt generates a SPA
});
