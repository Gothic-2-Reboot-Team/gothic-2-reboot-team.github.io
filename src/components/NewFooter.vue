<script setup lang="ts">
import Localizator from '@/components/Localizator.vue'
</script>

<template>
  <div class="grid-container">
    <br />
    <div class="grid-item">
      <h4 class="source-code-pro-400">Copyright © G2R Team 2021-{{ new Date().getFullYear() }}</h4>
    </div>
    <div class="grid-item">
      <Localizator />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 16x;
  margin-top: 16px;
}
.grid-item {
  /* padding: 20px; */
  text-align: left;
}
</style>
