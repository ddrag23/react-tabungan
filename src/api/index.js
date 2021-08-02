import axios from 'axios'

const customInstance = axios.create({
  baseURL: 'http://localhost/tabunganku/api/',
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true,
})

export default customInstance
