// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,

  css: [
    '@/assets/scss/main.scss',
  ],

  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    layoutTransition: {name: 'layout', mode: 'out-in'},
    head: {
        htmlAttrs: {
            lang: 'fr',
        },
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        title: 'Nenes.moe',
        meta: [
            {
                name: 'description',
                content: "Just a random lost on internet~~"
            },
            {name: "theme-color", content: "#0078ff"},
        ],
        link: [
            {rel: "icon", type: "image/png", href: "/favicon.png"},
        ],
    }
},

  modules: ['@nuxt/devtools', '@nuxt/icon'],

  devtools: { enabled: true },
  compatibilityDate: '2025-02-16'
})