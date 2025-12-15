<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale, availableLocales } = useI18n()

const filteredLocales = computed(() => {
  const localeKeys = availableLocales as Array<keyof typeof locales>

  return Object.values(locales).filter((l) =>
    localeKeys.includes(l.code as keyof typeof locales),
  )
})
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="filteredLocales"
    class="w-48"
    variant="soft"
    color="neutral"
    size="lg"
    @update:model-value="setLocale($event)"
  />
</template>
