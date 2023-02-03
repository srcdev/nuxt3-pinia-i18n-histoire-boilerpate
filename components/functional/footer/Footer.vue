<template>
  <footer class="footer">
    <div class="footer-inner">
      <p>&copy;{{ copyYear }}</p>
      <ul class="footer-links-list">
        <li class="footer-links-item">
          <NuxtLink to="/" class="footer-links-link">Home</NuxtLink>
        </li>
        <li class="footer-links-item">
          <NuxtLink to="/samples/i18n-examples" class="footer-links-link"
            >i18n</NuxtLink
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
const copyYear = new Date().getFullYear()
</script>

<style lang="scss">
@import '@/assets/styles/imports.scss';

.footer {
  $self: &;
  background-color: red;
  margin: 0;

  &-inner {
    align-items: center;
    background-color: lightsalmon;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: $max-content-width;
    padding: 0 1.2rem;
  }


  &-links {
    &-list {
      display: flex;
      list-style-type: none;
    }
    &-item {
    }
    &-link {
      display: block;
      padding: 0.6rem 1.2rem;
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
