import localConfig from './local.json'
import prodConfig from './production.json'

const config = () => {
  if(process.env.NODE_ENV === 'production') {
    return prodConfig
  }
  return localConfig
}

export default config