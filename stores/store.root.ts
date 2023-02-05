import { defineStore } from 'pinia'
import { IRootStore } from '@/types/types.rootStore'
import { rootActions } from '@/stores/store.root.actions'

export const useRootStore = defineStore({
  id: 'rootStore',
  state: (): IRootStore => ({
    validatorLocale: 'en-GB',
  }),
  actions: rootActions,
})
