import { mount, shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import ProjectsComponent from './ProjectsComponent.vue'

const propsData = {
  projects: {
    data: [
      {
        link: 'https://waldou.com/project1',
        media: '',
        title: 'Project1',
        year: '2019',
        type: 'Application',
        platform: 'Web',
        description: '<a href="url" />description</a> bye'
      },
      {
        link: 'https://waldou.com/project2',
        media: '',
        title: 'Project2',
        year: '2018',
        type: 'Game',
        platform: 'Android',
        description: '<a href="url" />description</a> bye'
      }
    ]
  }
}

const projects = {
  data: [
    {
      link: 'https://waldou.com/project1',
      media: '',
      title: 'Project name1',
      year: '2020',
      type: 'Application',
      platform: 'Web',
      description: '<a href="url" />description</a> bye'
    },
    {
      link: 'https://waldou.com/project2',
      media: '',
      title: 'Project name2',
      year: '2020',
      type: 'Game',
      platform: 'Android',
      description: '<a href="url" />description</a> bye'
    }
  ]
}

beforeEach(() => {
  jest.clearAllMocks()
  moxios.install()
})

afterEach(() => {
  moxios.install()
})

it('renders', () => {
  const wrapper = shallowMount(ProjectsComponent)
  expect(wrapper.isVueInstance()).toBeTruthy()
})

it('requests projects on mount', async (done) => {
  moxios.stubRequest('data/projects.json', { status: 200, response: projects })
  const wrapper = mount(ProjectsComponent, { propsData })
  moxios.wait(() => {
    expect(wrapper.vm.projectsData[0].title).toBe('Project name1')
    done()
  })
})

it('uses projects from props when request fails', async () => {
  moxios.stubFailure('data/projects.json', { status: 500 })
  const wrapper = mount(ProjectsComponent, { propsData })
  moxios.wait(() => {
    let request = moxios.requests.mostRecent()
    request.reject({ status: 500, response: { message: 'invalid data' }})
  })

  expect(wrapper.vm.projectsData[0].title).toBe('Project1')
})