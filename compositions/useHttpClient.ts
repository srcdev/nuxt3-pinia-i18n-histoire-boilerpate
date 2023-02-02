import axios from 'axios'

const baseUrl = 'https://localhost:3000'
const useHttpClient = () => {
  const httpOptions = {
    baseURL: `${baseUrl}`,
    header: {
      'Content-type': 'application/json',
    },
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
  }
  return axios.create(httpOptions)
}
export default useHttpClient()
