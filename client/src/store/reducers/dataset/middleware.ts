import {api} from "../../../http";

export const fetchData = async <T>(url: string) => {
  try {
    const {data} = await api.get<T>(url)
    return data
  } catch (error) {
    return {
      error: true,
      status: 500,
      msg: 'Something was wrong!',
      data: []}
  }
}