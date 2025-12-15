<template>
  <UFooter>
    <template #left>
      <p class="text-gray-400">Copyright © G2R Team 2021-{{ currentYear }}</p>
    </template>
    <template #right>
      <LanguageSwitcher />
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
