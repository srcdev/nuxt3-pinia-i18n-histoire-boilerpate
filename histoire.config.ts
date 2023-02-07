import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstNuxt } from '@histoire/plugin-nuxt'
// import i18n from '@/plugins/i18n'

export default defineConfig({
  plugins: [HstVue(), HstNuxt()],
  setupFile: {
    browser: './histoire-setup',
    // server: './histoire-setup.server',
  },
  vite: {
    // ssr: false,
    // css: ['./assets/styles/index.scss'],
    // imports: {
    //   dirs: ['stores'],
    // },
    // server: {},
  },
  responsivePresets: [
    {
      label: 'Mobile (Small)',
      width: 320,
      height: 560,
    },
    {
      label: 'Mobile (Medium)',
      width: 360,
      height: 640,
    },
    {
      label: 'Mobile (Large)',
      width: 414,
      height: 896,
    },
    {
      label: 'Tablet',
      width: 768,
      height: 1024,
    },
    {
      label: 'Laptop (Small)',
      width: 1024,
      height: 1024,
    },
    {
      label: 'Laptop (Large)',
      width: 1366,
      height: 1024,
    },
    {
      label: 'Desktop',
      width: 1920,
      height: 1024,
    },
    {
      label: '4K',
      width: 3840,
      height: 1024,
    },
  ],
})
