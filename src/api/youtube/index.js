import axios from 'axios'
import config from '../config'
import credentials from '../credentials'
import fallback from './fallback.json'

const getLastTwoVideos = async () => {
  const url = `${config().youtube}&key=${credentials().youtubeApiKey}`
  return axios.get(url, { headers: { Accept: 'application/json' }})
    .then((response) => response.data)
    .catch(() => {
      return Promise.resolve(fallback)
    })
}

export default {
  getLastTwoVideos,
}