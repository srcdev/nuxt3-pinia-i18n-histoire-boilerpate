<template>
  <header class="header">
    <h1>Header</h1>
    <p>Header text</p>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '@/assets/styles/imports.scss';

.header {
  background-color: red;
  position: fixed;
  left: 0%;
  top: 0%;
  // bottom: auto;
  z-index: 150;
  width: 100%;
  height: $headerDepth;

  &-inner {
    align-items: center;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 150%;
    display: flex;
    height: 100%;
    padding: 0 5vw;
  }
}
</style>
