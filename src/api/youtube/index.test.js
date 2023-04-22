import youtubeApi from './index'
import moxios from 'moxios'

const URL_REGEX = /^https:\/\/127.0.0.1:7443\/youtube\/v3\/search.+?/

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

it('returns videos info from remote', async () => {
  moxios.stubRequest(URL_REGEX, { status: 200, response: fakeResponse })
  const response = await youtubeApi.getLastTwoVideos()
  await moxiosPromise(() => {
    expect(response.data).toBe(fakeResponse.data)
  })
})