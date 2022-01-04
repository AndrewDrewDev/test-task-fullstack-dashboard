import React, {FC} from 'react';
import {TabsNamesEnum} from "../../types";
import {ErrorsAveragePanel} from "../ErrorsAveragePanel";
import {ErrorsInfoBar} from "../ErrorsInfoBar";
import {useGetCurrentErrorResponseData} from "../../hooks/useGetCurrentErrorResponseData";
import {ErrorsInfoStatistic} from "../ErrorsInfoStatistic";

const ErrorsInfoSection: FC<{tabName: TabsNamesEnum}> = ({tabName}) => {
  const responseData = useGetCurrentErrorResponseData(tabName)

  return (
    <div>
      <ErrorsAveragePanel/>
      <ErrorsInfoBar responseData={responseData} />
      <ErrorsInfoStatistic responseData={responseData}/>
    </div>
  );
};



export default ErrorsInfoSection;

