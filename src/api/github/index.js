import axios from 'axios'
import config from '../config'

const getUserInfo = () => {
  return axios.get(config().github, {
    headers: {
      Accept: 'application/json'
    }
  })
}

export default {
  getUserInfo,
}