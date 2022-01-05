import { rootState } from '../store'
import { useTypedSelector } from './useTypedSelector'

export const useGetAnalyticsData = () => {
  const { analytics_data } = useTypedSelector(rootState)
  const { data } = analytics_data
  const [result] = data
  return result
}
