import axios from 'axios'

export const api = axios.create({
  // hardcode url to api
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/'
    : 'https://test-task-fullstack-dashboard.herokuapp.com/',
})
