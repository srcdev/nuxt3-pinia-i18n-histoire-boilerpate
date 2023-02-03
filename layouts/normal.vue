<template>
  <div class="page-wrapper">
    <Header></Header>
    <div class="content-wrapper">
      <slot name="content"></slot>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/functional/header/Header.vue'
import Footer from '@/components/functional/footer/Footer.vue'

// const i18n = new VueI18n();
</script>

<style lang="scss">
@import '@/assets/styles/imports.scss';

.page {
  $self: &;
  &-wrapper {
    background-color: $page-bg-light;
  }
}

.content {
  &-wrapper {
    padding: 0 $content-gutter-width;
  }
}
</style>
