<template>
  <PageRow :isWide="true">
    <template #content>
      <header class="header">
        <div class="header-inner">
          <h1>Header</h1>
          <p>Header text</p>
          <p>{{ t('header.text') }}</p>
          <p v-text="t('header.text')"></p>
          <p v-t="t('header.text')"></p>
        </div>
      </header>
    </template>
  </PageRow>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageRow from '@/components/functional/page-row/PageRow.vue'

const { t } = useI18n()
</script>

<style lang="scss">
@import '@/assets/styles/imports.scss';

// .header {
//   $self: &;

//   &-inner {
//   }
// }
</style>
