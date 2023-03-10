<template>
  <div>
    <NuxtLayout name="normal">
      <template #content>
        <PageRow>
          <template #content>
            <h2>(WIDE) Example of internationalisation (i18n)</h2>
            <p>How to implement the various different i18n text outputs.</p>
            <p>{{ t('header.text') }}</p>
          </template>
        </PageRow>

        <PageRow :isWide="true">
          <template #content>
            <h2>(NORMAL) Simple text display</h2>
            <p>{{ t('i18nExamples.simpleTextKey') }}</p>
            <p v-text="t('i18nExamples.simpleTextKey')"></p>
          </template>
        </PageRow>

        <PageRow>
          <template #content>
            <h2>
              Text display with variable. (Displays the number 12 within string)
            </h2>
            <p>
              {{ t('i18nExamples.simpleTextKeyWithSingleVar', { count: 12 }) }}
            </p>

            <h2>Text display with multiple variables.</h2>
            <p>
              {{
                t('i18nExamples.simpleTextKeyWithManyVars', {
                  count1: 3,
                  count2: 1,
                  count3: 12,
                })
              }}
            </p>

            <h2>Variable message depending on item count.</h2>
            <p>
              {{
                t('i18nExamples.messageBasedOnItemCount', {
                  count: 0,
                })
              }}
            </p>
            <p>
              {{
                t('i18nExamples.messageBasedOnItemCount', {
                  count: 1,
                })
              }}
            </p>
            <p>
              {{
                t('i18nExamples.messageBasedOnItemCount', {
                  count: 6,
                })
              }}
            </p>
          </template>
        </PageRow>

        <PageRow>
          <template #content>
            <h2>Compound html (incorrect way)</h2>
            <p>Phone number is in reserved range so will not connect.</p>
            <a :href="t('i18nExamples.telephone.href')">{{
              t('i18nExamples.telephone.linkText')
            }}</a>
            <h2>
              Now attempt to use (below) <strong>&lt;i18n&gt;</strong> results
              in error.
            </h2>

            <i18n-t
              keypath="i18nExamples.telephone.text"
              tag="p"
              scope="global"
            >
              <template #link>
                <a :href="t('i18nExamples.telephone.href')">{{
                  t('i18nExamples.telephone.linkText')
                }}</a>
              </template>
            </i18n-t>
            <p>Phone number is in reserved range so will not connect.</p>
          </template>
        </PageRow>
        <PageRow>
          <template #content>
            <h2>Multiple slots</h2>
            <i18n-t
              keypath="i18nExamples.changeFlight.info"
              tag="p"
              scope="global"
            >
              <template #limit>
                <span>{{ t('i18nExamples.changeFlight.changeLimit') }}</span>
              </template>
              <template #action>
                <a :href="t('i18nExamples.changeFlight.changeUrl')">{{
                  t('i18nExamples.changeFlight.change')
                }}</a>
              </template>
            </i18n-t>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageRow from '@/components/functional/page-row/PageRow.vue'
definePageMeta({
  layout: false,
})
useHead({
  title: 'Example of internationalisation (i18n)',
  meta: [
    {
      name: 'description',
      content: 'How to implement the various different i18n text outputs.',
    },
  ],
  bodyAttrs: {
    class: 'class-to-apply-if-desired',
  },
})

const { t } = useI18n()
</script>

<style lang="scss">
@import '@/assets/styles/imports.scss';
</style>
