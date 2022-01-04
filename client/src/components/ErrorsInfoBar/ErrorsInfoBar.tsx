import React, {FC, useEffect, useState} from 'react';
import InfoBarItem from "./InfoBarItem";
import {ErrorsPercentagedData, getPercentage} from "../../utils/getPercentage";

import './ErrorsInfoBar.scss'
import {colors} from "../../consts/colors";
import {ErrorsResponseDataProps} from "../ErrorsInfoSection/types";
import {getCodeTitle} from "../../utils/getCodeTitle";
import {getErrorColor} from "../../utils/getErrorColor";

const ErrorsInfoBar: FC<ErrorsResponseDataProps> = ({responseData}) => {
  const [details, setDetails] = useState<ErrorsPercentagedData[]>()
  const {error, data} = responseData

  useEffect(() => {
    if (data) {
      setDetails(getPercentage(data))
    }
  }, [])

  if (error) {
    return <ErrorMessage children="Не удалось получить данные об ошибках!"/>
  }

  const dataNotFound = data !== undefined && data.length === 0
  if (dataNotFound) {
    return <ErrorMessage children="Данные об ошибках не найдены!"/>
  }

  return (
    <div className="errors-info">
      {details && details.map((item, i) => {
        const {code, percentage, count} = item
        return (
          <InfoBarItem
            key={percentage}
            percentage={percentage}
            title={getCodeTitle(code, count)}
            color={getErrorColor(code, i)}
            percentWidth={percentage}/>
        )
      })}
    </div>
  );
};

const ErrorMessage: FC = ({children}) => {
  return (
    <div className="errors-info__error">
      {children}
    </div>
  )
}

export default ErrorsInfoBar;