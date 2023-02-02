import { defineStore } from 'pinia'
import { IRootStore } from '@/types/types.rootStore'
import { rootActions } from '@/stores/store.root.actions'

export const useRootStore = defineStore({
  id: 'rootStore',
  state: (): IRootStore => ({
    validatorLocale: 'en-GB',
    cssVars: {
      upvc: {
        panelBgColor: 'rgba(38, 91, 150, 0.73)',
        panelBgImg:
          'linear-gradient(120deg, rgba(231, 240, 249, 0.31), transparent)',
      },
      aluminium: {
        panelBgColor: 'rgba(60, 60, 60, 0.9)',
        panelBgImg:
          'linear-gradient(145deg, rgba(249, 231, 231, 0.09), transparent)',
      },
    },
  }),
  persist: {
    key: 'rootStore',
    storage: window.sessionStorage,
  },
  actions: rootActions,
})
