<template>
  <div class="page-wrapper">
    <Header></Header>
    <slot name="content"></slot>
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

.page-wrapper {
  min-height: 100vh;
  padding-bottom: $footerDepth;
  padding-top: $headerDepth;
}
</style>
