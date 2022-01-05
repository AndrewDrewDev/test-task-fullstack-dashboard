import {useEffect} from "react";
import {fetchData} from "../store/reducers/datasetStore/middleware";
import {DatasetState} from "../store/reducers/datasetStore/types";
import {useAction} from "./useAction";

export const useFetchAllData = () => {
  const {
    setAnalyticsData,
    setErrorsLastHour,
    setErrorsYesterday,
    setErrorsLast3Day,
    setErrorsToday,
    setPending
  } = useAction();

  useEffect(() => {
    // Preliminary load all data from server
    (async () => {
      try {
        const errors_today = await fetchData<DatasetState["errors_today"]>("api/errors/errors_today");
        const errors_last_3days = await fetchData<DatasetState["errors_last_3days"]>("api/errors/errors_last_3_day");
        const errors_yesterday = await fetchData<DatasetState["errors_yesterday"]>("api/errors/errors_yesterday");
        const errors_last_hour = await fetchData<DatasetState["errors_last_hour"]>("api/errors/errors_last_hour");
        const analytics_data = await fetchData<DatasetState["analytics_data"]>("api/data");

        setErrorsToday(errors_today)
        setAnalyticsData(analytics_data)
        setErrorsLast3Day(errors_last_3days)
        setErrorsYesterday(errors_yesterday)
        setErrorsLastHour(errors_last_hour)

        setPending(false)
      } finally {
        setPending(false)
      }

    })();
  }, [])
}