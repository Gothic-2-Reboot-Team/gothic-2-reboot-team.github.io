import { loadLocales } from './i18n/utils/loadLocales'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/i18n', '@nuxt/ui', '@nuxt/eslint'],
  devtools: { enabled: true },
  i18n: {
    locales: loadLocales(),
    strategy: 'prefix',
    defaultLocale: 'pl',
    vueI18n: './i18n/i18n.config.ts',
    detectBrowserLanguage: false,
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
})
