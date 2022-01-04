import {useEffect} from "react";
import {fetchData} from "../store/reducers/dataset/middleware";
import {DatasetState} from "../store/reducers/dataset/types";
import {useAction} from "./useAction";

export const useFetchAllData = () => {
  const {setData, setErrorsLastHour, setErrorsYesterday, setErrorsLast3Day} = useAction();

  useEffect(() => {
    // preliminary load all data from server
    (async () => {
      const data = await fetchData<DatasetState["data"]>("api/data");
      const errors_last_3days = await fetchData<DatasetState["errors_last_3days"]>("api/errors/errors_last_3_day");
      const errors_yesterday = await fetchData<DatasetState["errors_yesterday"]>("api/data/errors_yesterday");
      const errors_last_hour = await fetchData<DatasetState["errors_last_hour"]>("api/errors/errors_last_hour");

      setData(data)
      setErrorsLast3Day(errors_last_3days)
      setErrorsYesterday(errors_yesterday)
      setErrorsLastHour(errors_last_hour)
    })();
  }, [])
}