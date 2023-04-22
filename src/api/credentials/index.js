import localCreds from './local.json'
import prodCreds from './production.json'

const credentials = () => {
  if(process.env.NODE_ENV === 'production') {
    return prodCreds
  }
  return localCreds
}

export default credentials