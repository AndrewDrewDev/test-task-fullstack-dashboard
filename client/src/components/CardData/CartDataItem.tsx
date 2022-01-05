import React, { FC, ReactElement } from 'react'
import cn from 'classnames'

export interface CardDataItemProps {
  svgIcon: ReactElement
  mainTitle: string
  label?: string
  colorRed?: true
  errorsYesterday: string | number | null
  errorsLastFriday: string | number | null
  detailsTitle: string[]
  detailsDescription: string
  helpLinks: string[]
}

const CartDataItem: FC<CardDataItemProps> = props => {
  const {
    svgIcon,
    label,
    detailsDescription,
    detailsTitle,
    mainTitle,
    errorsLastFriday,
    errorsYesterday,
    helpLinks,
    colorRed,
  } = props

  return (
    <div className="card-data__item">
      <div className="card-data__main card-data__container">
        <div className="card-data__icon">
          {svgIcon}
          <div
            className={cn('card-data__indicator', {
              'card-data__background-red': colorRed,
            })}
          />
        </div>
        <div>
          <div className="card-data__title">
            <h2
              className={cn('header text', {
                'card-data__text-red': colorRed,
              })}
            >
              {mainTitle}
            </h2>
            {label && (
              <div
                className={cn('card-data__label', {
                  'card-data__background-red': colorRed,
                })}
              >
                {label}
              </div>
            )}
          </div>
          <div className="card-data__subtitle">
            <div className="card-data__info-by-date">
              {errorsYesterday ?? 'Null'}
              <span>Yesterday</span>
            </div>
            <div className="card-data__info-by-date text-gray">
              {errorsLastFriday ?? 'Null'}
              <span>Last Friday</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-data__details card-data__container">
        <div
          className={cn('card-data__title_column', {
            'card-data__text-red': colorRed,
          })}
        >
          {detailsTitle.map(textItem => (
            <div key={textItem} className="header">
              {textItem}
            </div>
          ))}
        </div>
        <div className="card-data__description">{detailsDescription}</div>
        <div className="card-data__help">
          Help:
          {helpLinks.map(textItem => (
            <span key={textItem} className="card-data__link">
              {textItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CartDataItem
