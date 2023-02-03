<template>
  <div>
    <NuxtLayout name="normal">
      <template #content>
        <PageRow>
          <template #content>
            <h2>(WIDE) Example of internationalisation (i18n)</h2>
            <p>How to implement the various different i18n text outputs.</p>
          </template>
        </PageRow>

        <PageRow :isWide="true">
          <template #content>
            <h2>(NORMAL) Simple text display</h2>
            <code v-pre>
              &lt;p&gt;{{ $t('i18nExamples.simpleTextKey') }}&lt;/p&gt;
            </code>
            -
            <p>{{ $t('i18nExamples.simpleTextKey') }}</p>
            -
            <code v-pre>
              &lt;p v-text="$t('i18nExamples.simpleTextKey')"&gt;&lt;p&gt;
            </code>
            -
            <p v-text="$t('i18nExamples.simpleTextKey')"></p>
          </template>
        </PageRow>

        <PageRow>
          <template #content>
            <h2>
              Text display with variable. (Displays the number 12 within string)
            </h2>
            <code v-pre>
              &lt;p&gt;{{
                $t('i18nExamples.simpleTextKeyWithVar', { count: 12 })
              }}&lt;/p&gt;
            </code>
            -
            <p>
              {{ $t('i18nExamples.simpleTextKeyWithSingleVar', { count: 12 }) }}
            </p>

            <h2>Text display with multiple variables.</h2>
            <code v-pre>
              &lt;p&gt;{{
                $t('i18nExamples.simpleTextKeyWithManyVars', {
                  count1: 3,
                  count2: 1,
                  count3: 12,
                })
              }}&lt;/p&gt;
            </code>
            -
            <p>
              {{
                $t('i18nExamples.simpleTextKeyWithManyVars', {
                  count1: 3,
                  count2: 1,
                  count3: 12,
                })
              }}
            </p>

            <h2>Variable message depending on item count.</h2>
            <code v-pre>
              &lt;p&gt;{{
                $t('i18nExamples.messageBasedOnItemCount', {
                  count: 0,
                })
              }}&lt;/p&gt;
            </code>
            -
            <p>
              {{
                $t('i18nExamples.messageBasedOnItemCount', {
                  count: 0,
                })
              }}
            </p>
            <p>
              {{
                $t('i18nExamples.messageBasedOnItemCount', {
                  count: 1,
                })
              }}
            </p>
            <p>
              {{
                $t('i18nExamples.messageBasedOnItemCount', {
                  count: 6,
                })
              }}
            </p>
          </template>
        </PageRow>

        <PageRow>
          <template #content>
            <h2>Compound html</h2>
            <p>Phone number is in reserved range so will not connect.</p>
            <a :href="$t('i18nExamples.telephone.href')">{{
              $t('i18nExamples.telephone.linkText')
            }}</a>
            <h2>
              Attempt to use (below) <strong>&lt;i18n&gt;</strong> results in
              error.
            </h2>
            <i18n path="i18nExamples.telephone.text" tag="p" for="text">
              <template v-slot:text>
                <a :href="$t('i18nExamples.telephone.href')">{{
                  $t('i18nExamples.telephone.linkText')
                }}</a>
              </template>
            </i18n>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
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

// const i18n = new VueI18n();
</script>

<style lang="scss">
@import '@/assets/styles/imports.scss';
</style>
