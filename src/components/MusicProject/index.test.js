import { mount, shallowMount } from '@vue/test-utils'
import MusicProject from './index.vue'

const propsData = {
  title: 'The project title',
  type: 'Music',
  description: 'The project description',
  media: '<img src="https://media.jpg">'
}

it('renders', () => {
  const wrapper = shallowMount(MusicProject, { propsData })
  expect(wrapper.isVueInstance()).toBeTruthy()
  expect(wrapper.classes()).toContain('project')
})

it('renders props', () => {
  const wrapper = mount(MusicProject, { propsData })
  const html = wrapper.html()
  expect(html).toContain('<h2>The project title</h2>')
  expect(html).toContain('<div class="project-media"><img src="https://media.jpg"></div')
  expect(html).toContain('The project description')
})