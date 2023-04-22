import projectsApi from './index'
import moxios from 'moxios'

beforeEach(() => {
  jest.clearAllMocks()
  moxios.install()
})

afterEach(() => {
  moxios.install()
})

const fakeResponse = {
  data: [ 'values' ]
}

function moxiosPromise(func) {
  return new Promise(resolve => {
    moxios.wait(() => {
      func()
      resolve();
    })
  });
}

it('returns empty projects when no language is provided', () => {
  expect(projectsApi.getProjects()).toStrictEqual({ data: []})
})

it('returns projects from remote', async () => {
  moxios.stubRequest('https://127.0.0.1:7443/es/data/projects.json', { status: 200, response: fakeResponse })
  const response = await projectsApi.getProjects('es')
  await moxiosPromise(() => {
    expect(response.data).toBe(fakeResponse)
  })
})