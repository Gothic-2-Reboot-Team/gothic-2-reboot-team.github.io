<template>
  <div>
    {{ $t('about.description') }}
  </div>
</template>

<script setup lang="ts">
useHead({
  title: computed(() => $t('navigation.about'))
})
</script>
