<template>
  <PageRow :isWide="true">
    <template #content>
      <header class="header">
        <div class="header-inner">
          <h1>Header</h1>
          <p>Header text</p>
        </div>
      </header>
    </template>
  </PageRow>
</template>

<script setup lang="ts">
import PageRow from '@/components/functional/page-row/PageRow.vue'
</script>

<style lang="scss">
@import '@/assets/styles/imports.scss';

.header {
  $self: &;

  &-inner {
  }
}
</style>
