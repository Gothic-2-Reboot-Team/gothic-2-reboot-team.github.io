import '@/assets/main.css'

import EN_LOCALE from '@/locales/en.json'
import PL_LOCALE from '@/locales/pl.json'
import DE_LOCALE from '@/locales/de.json'
import JA_LOCALE from '@/locales/ja.json'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from '@/App.vue'
import router from '@/router'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: EN_LOCALE,
    pl: PL_LOCALE,
    de: DE_LOCALE,
    ja: JA_LOCALE,
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
