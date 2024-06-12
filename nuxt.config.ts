// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','animate.css'],
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // nitro: {
  //   devProxy: {
  //     "/api": {
  //       target: "https://www.mfonts.cn/",
  //       changeOrigin: true,
  //       prependPath: true,
  //     },
  //   },
  // },
  app: {
    head: {
      script: [
        {
          src: "https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/icons_8837_52.2cd53305ff749a0049b0138e4cf04b48.js",
          // async: true,
          // defer: true,
        },
      ],
    }
  }
})
