<template>
  <div>
    <NuxtLayout name="normal">
      <template #content>
        <h2>Page using default template</h2>
        <p>Fnar fnar</p>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
useHead({
  title: 'Home page',
  meta: [{ name: 'description', content: 'Desciption meta tag content' }],
  bodyAttrs: {
    class: 'class-to-apply-if-desired',
  },
})

// const i18n = new VueI18n();
</script>

<style lang="scss">
@import '@/assets/styles/imports.scss';
</style>
