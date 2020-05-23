import { shallowMount } from '@vue/test-utils'
import AboutView from './AboutView.vue'

it('renders', () => {
  const wrapper = shallowMount(AboutView)
  expect(wrapper.isVueInstance()).toBeTruthy()
  expect(wrapper.find('.about').exists()).toBe(true)
})