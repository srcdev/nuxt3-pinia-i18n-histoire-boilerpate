<template>
  <PageRow :isWide="true">
    <template #content>
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
  </PageRow>
</template>

<script setup lang="ts">
import PageRow from '@/components/functional/page-row/PageRow.vue'
const copyYear = new Date().getFullYear()
</script>

<style lang="scss">
@import '@/assets/styles/imports.scss';

.footer {
  $self: &;

  &-inner {
    align-items: center;
    display: flex;
    flex-direction: column;
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
      padding: 0.6rem $content-padding-width;
    }
  }
}
</style>
