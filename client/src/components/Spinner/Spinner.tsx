import React from 'react'

import './Spinner.scss'

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <h2 className="spinner__title">Loading...</h2>
        <div className="spinner__icon" />
      </div>
    </>
  )
}

export default Spinner
