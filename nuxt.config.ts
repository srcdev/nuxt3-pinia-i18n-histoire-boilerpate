import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/styles/index.scss'],
  plugins: ['~/plugins/i18n.ts'],
  modules: ['@pinia/nuxt'],
  imports: {
    dirs: ['stores'],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: '%s - Website name',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/assets/images/favicon.jpg',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },
})
