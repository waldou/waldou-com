
import { shallowMount } from '@vue/test-utils'
import AboutView from './AboutView.vue'
import i18n from '@/__mocks__/i18n'

it('renders', () => {
  const wrapper = shallowMount(AboutView, { i18n })
  expect(wrapper.vm).toBeTruthy()
  expect(wrapper.find('.about').exists()).toBe(true)
})