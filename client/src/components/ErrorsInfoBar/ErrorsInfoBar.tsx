import React, {FC} from 'react';
import './ErrorsInfoBar.scss'

const colors = {
  base: ['#FFCC00', '#5856D5', '#2196F3'],
  other: '#A0B0B9'
}

const ErrorsInfoBar = () => {
  return (
    <div className="errors-info">
      <Item color={colors.base[0]} percentWidth={50}/>
      <Item color={colors.base[1]} percentWidth={25}/>
      <Item color={colors.base[2]} percentWidth={25}/>
    </div>
  );
};

interface ItemProps {
  percentWidth: number,
  color: string
}

const Item: FC<ItemProps> = ({percentWidth, color}) => {
  return (
    <>
      <div className="errors-info__item" style={
        {
          width: `${percentWidth}%`, backgroundColor: color
        }
      }/>
    </>
  )
}

export default ErrorsInfoBar;