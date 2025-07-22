<template>
  <div class="grid-container">
    <div class="grid-item">
      <h4 class="source-code-pro-400">
        Copyright © G2R Team 2021-{{ new Date().getFullYear() }}
      </h4>
    </div>
    <div class="grid-item">
      <LanguageSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue'
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-top: 16px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.grid-item {
  /* padding: 20px; */
  text-align: left;
}
</style>
