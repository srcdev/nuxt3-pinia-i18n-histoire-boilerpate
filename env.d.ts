/// <reference types="@histoire/plugin-vue/components" />
/// <reference types="@histoire/plugin-nuxt/components" />
interface ImportMetaEnv {
  NUXT_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
