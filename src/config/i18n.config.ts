import { createI18n } from 'vue-i18n'

import EN_LOCALE from '@/locales/en.json'
import PL_LOCALE from '@/locales/pl.json'
import DE_LOCALE from '@/locales/de.json'
import JA_LOCALE from '@/locales/ja.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: EN_LOCALE,
    pl: PL_LOCALE,
    de: DE_LOCALE,
    ja: JA_LOCALE
  }
})

export default i18n
