import {Dataset} from "../../../types";
import {ResponseBody} from "../../../model/ResponceBody";

export interface DatasetState {
  errors_today: ResponseBody<Dataset['errors_today']>,
  errors_last_3days: ResponseBody<Dataset['errors_last_3days']>,
  errors_yesterday: ResponseBody<Dataset['errors_yesterday']>,
  errors_last_hour: ResponseBody<Dataset['errors_last_hour']>,
  analytics_data: ResponseBody<Dataset['analytics_data']>,
  pending: boolean
}

export enum DatasetActionEnum {
  SET_ERRORS_LAST_3_DAY,
  SET_TODAY,
  SET_ERRORS_YESTERDAY,
  SET_ERRORS_LAST_HOUR,
  SET_DATA,
  SET_PENDING
}

export interface SetErrorsTodayAction {
  type: DatasetActionEnum.SET_TODAY
  payload: DatasetState["errors_today"]
}

export interface SetErrorsLast3dayAction {
  type: DatasetActionEnum.SET_ERRORS_LAST_3_DAY
  payload: DatasetState["errors_last_3days"]
}

export interface SetErrorsLastHourAction {
  type: DatasetActionEnum.SET_ERRORS_LAST_HOUR
  payload: DatasetState["errors_last_hour"]
}

export interface SetErrorsYesterdayAction {
  type: DatasetActionEnum.SET_ERRORS_YESTERDAY
  payload: DatasetState["errors_yesterday"]
}

export interface SetDataAction {
  type: DatasetActionEnum.SET_DATA
  payload: DatasetState['analytics_data']
}

export interface SetPendingAction {
  type: DatasetActionEnum.SET_PENDING
  payload: DatasetState['pending']
}

export type DatasetActions =
  | SetErrorsTodayAction
  | SetErrorsLast3dayAction
  | SetErrorsLastHourAction
  | SetErrorsYesterdayAction
  | SetDataAction
  | SetPendingAction
