import axios from 'axios'

const getUserInfo = () => {
  return axios.get('https://api.github.com/users/waldou', {
    headers: {
      Accept: 'application/json'
    }
  })
}

export default {
  getUserInfo,
}