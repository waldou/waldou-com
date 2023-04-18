import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import AboutView from './AboutView.vue'
import VueI18n from 'vue-i18n'
import esLocale from '@/locales/es.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  messages: {
    es: { ...esLocale },
  },
})

const options = {
  i18n,
}

it('renders', () => {
  const wrapper = shallowMount(AboutView, options)
  expect(wrapper.vm).toBeTruthy()
  expect(wrapper.find('.about').exists()).toBe(true)
})