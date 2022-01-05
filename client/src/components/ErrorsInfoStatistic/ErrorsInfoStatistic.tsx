import React, {FC} from 'react';

import './ErrorsInfoStatistic.scss'
import {ErrorsResponseDataProps} from "../ErrorsInfoSection/types";
import {getCodeTitle} from "../../utils/getCodeTitle";
import {getErrorColor} from "../../utils/getErrorColor";

const ErrorsInfoStatistic: FC<ErrorsResponseDataProps> = ({responseData}) => {
  const {data} = responseData

  return (
    <div className="errors-info-statistic">
      {data && data.map((item, i) => {
        const {code, count} = item

        return <Item key={code} title={getCodeTitle(code, count)} color={getErrorColor(code, i)}/>
      })}
    </div>
  );
};

interface ItemProps {
  title: string,
  color: string
}
const Item: FC<ItemProps> = ({title, color}) => {
  return (
    <div className="errors-info-statistic__item">
      <div className="errors-info-statistic__icon" style={{backgroundColor: color}}/>
      <div className="errors-info-statistic__text">
        {title}
      </div>
    </div>
  )
}

export default ErrorsInfoStatistic;