import { mount, shallowMount } from '@vue/test-utils'
import ApplicationProject from './index.vue'
import i18n from '@/__mocks__/i18n'

const propsData = {
  title: 'The project title',
  year: '2020',
  type: 'Application',
  platform: 'Web',
  description: 'The project description',
  media: '<img src="https://media.jpg">'
}

it('renders', () => {
  const wrapper = shallowMount(ApplicationProject, { i18n, propsData })
  expect(wrapper.vm).toBeTruthy()
  expect(wrapper.classes()).toContain('project')
})

it('renders props', () => {
  const wrapper = mount(ApplicationProject, { i18n, propsData })
  const html = wrapper.html()
  expect(html).toContain('The project title<span> (2020)</span><')
  expect(html).toContain('<div class="project-media"><img src="https://media.jpg"></div')
  expect(html).toContain('Tipo: Aplicación')
  expect(html).toContain('Plataforma: Web')
  expect(html).toContain('The project description')
})