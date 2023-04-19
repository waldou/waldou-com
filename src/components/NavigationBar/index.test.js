import { shallowMount } from '@vue/test-utils'
import NavigationBar from './index.vue'
import i18n from '@/__mocks__/i18n'

jest.mock('@/i18n')

it('renders', () => {
  const wrapper = shallowMount(NavigationBar, { i18n, stubs: [ 'router-link', 'router-view' ]})
  expect(wrapper.vm).toBeTruthy()
  expect(wrapper.find('#nav').exists()).toBe(true)
})