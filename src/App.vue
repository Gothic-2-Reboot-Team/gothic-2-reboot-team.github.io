<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import WelcomeHeader from '@/components/welcomePage/WelcomeHeader.vue'
import InfoFooter from '@/components/common/InfoFooter.vue'
</script>

<template>
  <header>
    <img alt="G2R logo" class="logo" src="@/assets/logo.webp" width="125" height="125" />
    <div class="wrapper">
      <WelcomeHeader />
      <nav>
        <RouterLink to="/" class="source-code-pro-400">{{ $t('navigation.home') }}</RouterLink>
        <RouterLink to="/about" class="source-code-pro-400">{{ $t('navigation.about') }}</RouterLink>
        <RouterLink to="/faq" class="source-code-pro-400">FAQ</RouterLink>
      </nav>
      <br />
      <InfoFooter />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
