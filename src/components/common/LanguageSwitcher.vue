<template>
  <div>
    <select
      class="green source-code-pro-400"
      v-model="$i18n.locale"
      @change="onLanguageChange"
    >
      <option
        class="green source-code-pro-400"
        v-for="(lang, i) in localeNames"
        :key="`Lang${i}`"
        :value="lang.locale"
      >
        {{ lang.title }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()

const localeNames = computed(() => {
  const displayNames = new Intl.DisplayNames([locale.value || 'en'], { type: 'language' })
  return availableLocales.map((locale) => ({
    title: displayNames
      .of(locale)
      ?.replace(/^./, (char) =>
        char.toUpperCase(),
      ),
    locale,
  }))
})

onMounted(() => {
  const savedLocale = localStorage.getItem('locale') || 'en'
  if (savedLocale) {
    locale.value = savedLocale
  }
})

const onLanguageChange = () => {
  localStorage.setItem('locale', locale.value)
}
</script>

<style lang="css" scoped>
select, option {
  border: 0;
  color: white;
  background: var(--color-background);
  border-radius: 0;
  margin-left: 16px;
  margin-bottom: 10px;
}
</style>
