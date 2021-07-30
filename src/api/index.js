import axios from 'axios'

const customInstance = axios.create({
  baseURL: 'http://localhost/tabunganku/api/',
  headers: {
    Accept: 'application/json',
    Authorization: localStorage.getItem('token'),
  },
})

customInstance.defaults.withCredentials = true
export default customInstance
