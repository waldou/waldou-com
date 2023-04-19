import axios from 'axios'
import config from '../config'

const EMPTY_DATA = { data: []}

const getProjects = (language) => {
  if(!language) {
    return EMPTY_DATA
  }
  const url = config()[language + 'projects']
  return axios.get(url, {
    headers: {
      Accept: 'application/json',
    },
  })
}

export default {
  getProjects,
}