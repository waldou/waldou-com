import { shallowMount } from '@vue/test-utils'
import ProjectsView from './ProjectsView.vue'

it('renders', () => {
  const wrapper = shallowMount(ProjectsView)
  expect(wrapper.isVueInstance()).toBeTruthy()
  expect(wrapper.find('.projects').exists()).toBe(true)
})