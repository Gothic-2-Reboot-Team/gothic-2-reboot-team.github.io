<template>
  <div>
    <select class="green source-code-pro-400" v-model="$i18n.locale" @change="saveLocale">
      <option
        class="green source-code-pro-400"
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        :value="lang"
      >
        {{ lang.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'LanguageSwitcher',
  data() {
    return { langs: this.$i18n.availableLocales }
  },
  created() {
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale) {
      this.$i18n.locale = savedLocale
    }
  },
  methods: {
    saveLocale() {
      localStorage.setItem('locale', this.$i18n.locale)
    }
  }
}
</script>

<style lang="css" scoped>
select,
option {
  border: 0;
  color: white;
  background: var(--color-background);
  border-radius: 0;
  margin-left: 16px;
  margin-bottom: 10px;
}
</style>
