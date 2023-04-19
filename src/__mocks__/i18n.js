import Vue from 'vue'
import VueI18n from 'vue-i18n'
import esLocale from '@/locales/es.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  messages: {
    es: { ...esLocale },
  },
})

export default i18n