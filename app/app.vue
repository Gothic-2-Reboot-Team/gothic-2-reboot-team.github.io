<template>
  <UApp class="h-dvh flex flex-col">
    <UMain class="flex-1 flex flex-col overflow-hidden">
      <UContainer class="flex-1 flex flex-col overflow-hidden">
        <div class="flex-1 flex flex-col lg:flex-row overflow-hidden lg:gap-16">
          <div
            class="w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-6 lg:p-0 overflow-y-auto"
          >
            <div
              class="flex flex-col lg:flex-row p-0 lg:p-6 w-full gap-4 lg:gap-8"
            >
              <div
                class="flex justify-center items-center lg:justify-between mb-0 shrink-0"
              >
                <img
                  alt="G2R logo"
                  src="assets/images/logo.webp"
                  width="125"
                  height="125"
                />
              </div>

              <div class="flex flex-col text-center lg:text-left">
                <h1 class="text-3xl lg:text-4xl font-medium mb-2">
                  {{ t('home.header') }}
                </h1>
                <h3 class="text-lg lg:text-xl text-gray-400">
                  {{ t('home.description') }}
                </h3>

                <div class="flex justify-center lg:justify-start mt-4">
                  <UNavigationMenu :items="items">
                    <template #item="{ item }">
                      {{ translate(item.label ?? '', item.label ?? '') }}
                    </template>
                  </UNavigationMenu>
                </div>
              </div>
            </div>
          </div>

          <div
            class="w-full lg:w-1/2 flex items-center justify-center lg:justify-start p-6 lg:p-0 overflow-y-auto"
          >
            <NuxtPage />
          </div>
        </div>
      </UContainer>
    </UMain>

    <AppFooter />
  </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'navigation.home',
    to: localePath('/'),
    active: route.path === localePath('/'),
  },
  {
    label: 'navigation.about',
    to: localePath('/about'),
    active: route.path === localePath('/about'),
  },
  {
    label: 'FAQ',
    to: localePath('/faq'),
    active: route.path === localePath('/faq'),
  },
])

useHead({
  titleTemplate: (titleChunk) => {
    if (!titleChunk) return 'GOTHIC 2 Reboot'
    return `${titleChunk} - GOTHIC 2 Reboot`
  },
  title: `GOTHIC 2 Reboot`,
})
</script>

<style lang="css">
body {
  font-size: 1rem;
  font-family: monospace;
}
</style>
