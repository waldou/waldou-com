import { shallowMount } from '@vue/test-utils'
import NavigationBar from './index.vue'

it('renders', () => {
  const wrapper = shallowMount(NavigationBar, { stubs: [ 'router-link', 'router-view' ]})
  expect(wrapper.isVueInstance()).toBeTruthy()
  expect(wrapper.find('#nav').exists()).toBe(true)
})