<template>
  <header class="header wide">
    <div class="header-inner wide">
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
    padding: 0 $content-padding-width;

    &.wide {
      max-width: initial;
    }
  }

  &.wide {
    background-color: blue;
    #{ $self }-inner {
      background-color: lightsteelblue;
    }
  }
}
</style>
