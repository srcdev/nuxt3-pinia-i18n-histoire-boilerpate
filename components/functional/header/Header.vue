<template>
  <header class="header">
    <div class="header-inner">
      <h1>Header</h1>
      <p>Header text</p>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '@/assets/styles/imports.scss';

.header {
  $self: &;
  background-color: red;
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
</style>
