<template>
  <div class="locale-changer">
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

<style scoped>
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

<script>
export default {
  name: 'locale-changer',
  data() {
    return { langs: ['en', 'pl'] }
  }
}
</script>
