<template>
  <div class="about">
    <h3 class="source-code-pro-400" v-html="$t('about.description')"></h3>
  </div>
</template>

<style lang="css" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
