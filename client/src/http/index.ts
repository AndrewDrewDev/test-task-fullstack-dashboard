import axios from 'axios'

export const api = axios.create({
  // hardcode url to api
  baseURL: process.env.NODE_ENV === 'development'
    ? 'https://test-task-fullstack-dashboard.herokuapp.com/'
    : 'http://localhost:8080/',
})
