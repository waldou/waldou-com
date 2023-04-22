import { shallowMount } from '@vue/test-utils'
import MusicView from './MusicView.vue'
import i18n from '@/__mocks__/i18n'

jest.mock('@/i18n')

it('renders', () => {
  const wrapper = shallowMount(MusicView, { i18n })
  expect(wrapper.vm).toBeTruthy()
  expect(wrapper.find('#music-view').exists()).toBe(true)
})