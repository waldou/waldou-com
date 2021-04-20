import { mount, shallowMount } from '@vue/test-utils'
import moxios from 'moxios'
import MyGithub from './index.vue'

const apiResponse = {
  status: 200,
  response: {
    login: 'waldou',
    id: 3824104,
    url: 'https://api.github.com/users/waldou',
    created_at: '2013-03-10T14:42:23Z',
    updated_at: '2019-09-10T12:27:56Z'
  }
}


beforeEach(() => {
  jest.clearAllMocks()
  moxios.install()
})

afterEach(() => {
  moxios.uninstall()
})

it('renders', () => {
  const wrapper = shallowMount(MyGithub)
  expect(wrapper.vm).toBeTruthy()
})

it('requests data on mount', async (done) => {
  moxios.stubRequest('https://api.github.com/users/waldou', apiResponse)
  const wrapper = mount(MyGithub)
  moxios.wait(() => {
    expect(wrapper.vm.updatedAt).toBe('2019-09-10T12:27:56Z')
    done()
  })
})

it('returns computed value', async (done) => {
  moxios.stubRequest('https://api.github.com/users/waldou', apiResponse)
  const wrapper = mount(MyGithub)
  moxios.wait(() => {
    expect(wrapper.vm.formattedDate).toBe('on 2019-09-10 at 09:27:56')
    done()
  })
})

it('shows default message when request fails', async () => {
  moxios.stubFailure('https://api.github.com/users/waldou', { status: 500 })
  const wrapper = mount(MyGithub)
  moxios.wait(() => {
    let request = moxios.requests.mostRecent()
    request.reject({ status: 500, response: { message: 'invalid data' }})
  })

  const html = wrapper.html()
  expect(html).toContain('<span>My <a href="https://github.com/waldou">Github</a></span>')
})
