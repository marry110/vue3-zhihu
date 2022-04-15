import axios from 'axios'
const instance = axios.create({
  // @ts-ignore
  baseURL: process.env.VUE_APP_BASEURL,
  // baseURL: '/api/',
})
export default instance
