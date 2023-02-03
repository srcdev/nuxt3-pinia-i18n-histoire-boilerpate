<template>
  <div>
    <NuxtLayout name="normal">
      <template #content>
        <PageRow>
          <template #content>
            <h2>Page using default template</h2>
            <p>
              Bacon ipsum dolor amet salami beef tail, duis nostrud shank
              shoulder qui pancetta reprehenderit. Ipsum chicken velit, turkey
              kielbasa est hamburger minim chislic ut beef ribs pork belly qui.
              Exercitation corned beef esse consequat pancetta. Id nulla
              voluptate, pig turducken buffalo cupidatat bacon ground round
              cillum picanha aliqua. Irure veniam pig ea elit mollit bacon est
              lorem. Lorem jerky in, chislic tail ham cow. Bresaola kielbasa ut
              excepteur, reprehenderit pariatur tongue pig voluptate.
            </p>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import PageRow from '@/components/functional/page-row/PageRow.vue'
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
