import githubApi from './index'
import moxios from 'moxios'

beforeEach(() => {
  jest.clearAllMocks()
  moxios.install()
})

afterEach(() => {
  moxios.install()
})

const fakeResponse = {
  data: [ 'hello' ]
}

function moxiosPromise(func) {
  return new Promise(resolve => {
    moxios.wait(() => {
      func()
      resolve();
    })
  });
}

it('returns user info from remote', async () => {
  moxios.stubRequest('https://api.github.com/users/waldou', { status: 200, response: fakeResponse })
  const response = await githubApi.getUserInfo()
  await moxiosPromise(() => {
    expect(response.data).toBe(fakeResponse)
  })
})