import { shallowMount } from '@vue/test-utils'
import ProjectsView from './ProjectsView.vue'
import i18n from '@/__mocks__/i18n'

jest.mock('@/i18n')

it('renders', () => {
  const wrapper = shallowMount(ProjectsView, { i18n })
  expect(wrapper.vm).toBeTruthy()
  expect(wrapper.find('.projects').exists()).toBe(true)
})