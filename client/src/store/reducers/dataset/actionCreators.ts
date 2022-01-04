import {
  DatasetActionEnum,
  DatasetState,
  SetDataAction,
  SetErrorsLast3dayAction, SetErrorsLastHourAction, SetErrorsTodayAction,
  SetErrorsYesterdayAction
} from "./types";

export const DatasetActionCreators = {
  setAnalyticsData: (payload: DatasetState['analytics_data']): SetDataAction => ({
    type: DatasetActionEnum.SET_DATA,
    payload
  }),
  setErrorsToday: (payload: DatasetState['errors_today']): SetErrorsTodayAction => ({
    type: DatasetActionEnum.SET_TODAY,
    payload
  }),
  setErrorsLast3Day: (payload: DatasetState['errors_last_3days']): SetErrorsLast3dayAction => ({
    type: DatasetActionEnum.SET_ERRORS_LAST_3_DAY,
    payload
  }),
  setErrorsYesterday: (payload: DatasetState['errors_yesterday']): SetErrorsYesterdayAction => ({
    type: DatasetActionEnum.SET_ERRORS_YESTERDAY,
    payload
  }),
  setErrorsLastHour: (payload: DatasetState['errors_last_hour']): SetErrorsLastHourAction => ({
    type: DatasetActionEnum.SET_ERRORS_LAST_HOUR,
    payload
  }),

}


