import { DatasetActionEnum, DatasetActions, DatasetState } from './types'

const initialState: DatasetState = {
  errors_today: {},
  errors_last_hour: {},
  errors_yesterday: {},
  errors_last_3days: {},
  analytics_data: {},
  pending: true,
} as DatasetState

export const datasetReducer = (
  state = initialState,
  action: DatasetActions
): DatasetState => {
  switch (action.type) {
    case DatasetActionEnum.SET_DATA: {
      return { ...state, analytics_data: action.payload }
    }
    case DatasetActionEnum.SET_PENDING: {
      return { ...state, pending: action.payload }
    }
    case DatasetActionEnum.SET_TODAY: {
      return { ...state, errors_today: action.payload }
    }
    case DatasetActionEnum.SET_ERRORS_LAST_HOUR: {
      return { ...state, errors_last_hour: action.payload }
    }
    case DatasetActionEnum.SET_ERRORS_YESTERDAY: {
      return { ...state, errors_yesterday: action.payload }
    }
    case DatasetActionEnum.SET_ERRORS_LAST_3_DAY: {
      return { ...state, errors_last_3days: action.payload }
    }
    default:
      return state
  }
}
