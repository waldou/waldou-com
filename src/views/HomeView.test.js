import { shallowMount } from '@vue/test-utils'
import HomeView from './HomeView.vue'

it('renders', () => {
  const wrapper = shallowMount(HomeView)
  expect(wrapper.isVueInstance()).toBeTruthy()
  expect(wrapper.attributes().class).toBe('home')
})