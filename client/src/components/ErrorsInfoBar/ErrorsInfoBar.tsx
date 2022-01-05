import React, {FC} from 'react';
import InfoBarItem from "./InfoBarItem";
import {getPercentage} from "../../utils/getPercentage";
import {ErrorsResponseDataProps} from "../ErrorsInfoSection/types";
import {getCodeTitle} from "../../utils/getCodeTitle";
import {getErrorColor} from "../../utils/getErrorColor";

import './ErrorsInfoBar.scss'

const ErrorsInfoBar: FC<ErrorsResponseDataProps> = ({responseData}) => {
  const {error, data} = responseData

  if (error) {
    return <ErrorMessage children="Не удалось получить данные об ошибках!"/>
  }

  const dataNotFound = data !== undefined && data.length === 0
  if (dataNotFound) {
    return <ErrorMessage children="Данные об ошибках не найдены!"/>
  }

  return (
    <div className="errors-info">
      {data && getPercentage(data).map((item, i) => {
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