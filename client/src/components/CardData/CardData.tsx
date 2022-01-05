import React from 'react'
import CartDataItem from './CartDataItem'

import './CardData.scss'
import useGetPropsForCardSection from '../../hooks/useGetPropsForCardSection'

const CardData = () => {
  const { SearchesProps, ClickProps, BookingProps } =
    useGetPropsForCardSection()

  return (
    <section className="card-data">
      <CartDataItem {...SearchesProps} />
      <CartDataItem {...ClickProps} />
      <CartDataItem {...BookingProps} />
    </section>
  )
}

export default CardData
