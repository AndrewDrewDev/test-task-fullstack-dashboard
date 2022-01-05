import { api } from '../../../http'

export const errorFetchResponseMessage = {
  error: true,
  status: 500,
  msg: 'Something was wrong!',
  data: [],
}

export const fetchData = async <T>(url: string) => {
  try {
    const { data } = await api.get<T>(url)
    return data
  } catch (error) {
    return errorFetchResponseMessage
  }
}
