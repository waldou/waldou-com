import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const VALID_LOCALES = [ 'es', 'en' ]

const getLocaleOrFallback = (locale) => {
  if(!locale || !VALID_LOCALES.includes(locale)) {
    return process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'es'
  } else {
    return locale
  }
}

const getLocale = () => {
  const value = window.location.pathname.replace(/^\/([^/]+).*/i, '$1')
  if(value !== '/') {
    return getLocaleOrFallback(value)
  }
  return 'es'
}

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: getLocale(),
  fallbackLocale: getLocaleOrFallback(),
  messages: loadLocaleMessages(),
})