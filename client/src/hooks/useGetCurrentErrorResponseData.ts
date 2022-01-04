import {ErrorsBody, TabsNamesEnum} from "../types";
import {useSelector} from "react-redux";
import {rootState} from "../store";
import {ResponseBody} from "../model/ResponceBody";
import {errorFetchResponseMessage} from "../store/reducers/dataset/middleware";

export const useGetCurrentErrorResponseData = (tabName: TabsNamesEnum):  ResponseBody<ErrorsBody> => {
  const {errors_today, errors_last_hour, errors_yesterday, errors_last_3days} = useSelector(rootState)

  const map = new Map()
  map.set(TabsNamesEnum.today, errors_today)
  map.set(TabsNamesEnum.errors_yesterday, errors_yesterday)
  map.set(TabsNamesEnum.errors_last_3_day, errors_last_3days)
  map.set(TabsNamesEnum.errors_last_hour, errors_last_hour)

  return map.get(tabName) || errorFetchResponseMessage
}