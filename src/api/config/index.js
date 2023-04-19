import localConfig from '../config/local.json'
import prodConfig from '../config/production.json'

const config = () => {
  if(process.env.NODE_ENV === 'production') {
    return prodConfig
  }
  return localConfig
}

export default config