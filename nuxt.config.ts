import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/styles/index.scss'],
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: 'http://127.0.0.1.8080',
    },
  },
  plugins: ['~/plugins/i18n.ts'],
  modules: [
    '@pinia/nuxt',
    // '@nuxtjs/i18n'
  ],
  // i18n: {
  //   locales: [
  //     {
  //       code: 'en',
  //       file: 'en-GB.json',
  //       name: 'English'
  //     }
  //   ],
  //   lazy: true,
  //   langDir: 'i18n',
  //   defaultLocale: 'en'
  // },
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
  compilerOptions: {
    types: ['@nuxt/types', '@nuxtjs/i18n'],
  },
  publicRuntimeConfig: {
    NUXT_API_URL: process.env.NUXT_API_URL,
    apiBase: 'http://127.0.0.1.8080',
  },
})
