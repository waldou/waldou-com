import { shallowMount } from '@vue/test-utils'
import ProjectsComponent from './ProjectsComponent.vue'
import i18n from '@/__mocks__/i18n'

jest.mock('@/i18n')

beforeEach(() => {
  jest.clearAllMocks()
})

it('renders', () => {
  const wrapper = shallowMount(ProjectsComponent, { i18n })
  expect(wrapper.vm).toBeTruthy()
})
