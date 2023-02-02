<template>
  <footer class="footer">
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
  </footer>
</template>

<script setup lang="ts">
const route = useRoute()
const copyYear = new Date().getFullYear()
</script>

<style lang="scss">
@import '@/assets/styles/imports.scss';

.footer {
  background-color: rgb(206, 249, 206);
  bottom: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: $footerDepth;
  position: fixed;
  width: 100%;

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
}
</style>
