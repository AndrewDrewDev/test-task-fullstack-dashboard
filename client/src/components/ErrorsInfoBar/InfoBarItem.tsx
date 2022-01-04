import React, {FC} from "react";

interface ItemProps {
  title: string
  percentWidth: number,
  color: string,
  percentage: number
}
const InfoBarItem: FC<ItemProps> = ({title, percentWidth, color, percentage}) => {
  return (
    <>
      <div title={title} className="errors-info__item" style={
        {
          width: `${percentWidth}%`, backgroundColor: color
        }
      }>
        <span>{percentage} %</span>
      </div>
    </>
  )
}

export default InfoBarItem