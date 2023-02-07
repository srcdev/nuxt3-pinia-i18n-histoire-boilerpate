import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { translations } from '@/i18n'
import { defineSetupVue3 } from '@histoire/plugin-vue'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  const i18n = createI18n({
    langDir: 'i18n',
    messages: translations,
    defaultLocale: 'en',
    legacy: false,
    locale: 'en',
  })
  app.use(i18n)

  const pinia = createPinia()
  app.use(pinia)
})
