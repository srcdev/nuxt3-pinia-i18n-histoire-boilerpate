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

.page {
  $self: &;
  &-wrapper {
    background-color: lightblue;
  }
  &-row {
    $self: &;
    border: 1px solid black;
    background-color: lightgrey;
    margin: 0;

    &-inner {
      background-color: lightsalmon;
      margin: 0 auto;
      max-width: $max-content-width;
      padding: 0 1.2rem;
    }

    &.wide {
      background-color: blue;
      #{ $self }-inner {
        background-color: lightsteelblue;
      }
    }
  }
}
</style>
