<template>
  <div class="locale-selector">
    <select class="green source-code-pro-400" v-model="$i18n.locale">
      <option
        class="green source-code-pro-400"
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'LocaleSelector',
  data() {
    return { langs: this.$i18n.availableLocales }
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
  text-transform: uppercase;
}
</style>
