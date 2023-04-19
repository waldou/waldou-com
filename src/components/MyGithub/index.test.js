import { shallowMount } from '@vue/test-utils'
import MyGithub from './index.vue'
import i18n from '@/__mocks__/i18n'

jest.mock('@/i18n')

it('renders', () => {
  const wrapper = shallowMount(MyGithub, { i18n })
  expect(wrapper.vm).toBeTruthy()
})