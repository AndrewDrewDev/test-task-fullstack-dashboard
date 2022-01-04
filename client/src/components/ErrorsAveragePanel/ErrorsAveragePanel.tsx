import React from 'react';
import './ErrorsAveragePanel.scss'

const ErrorsAveragePanel = () => {
  return (
    <div className="errors-average">
      <div className="errors-average__item">
        <div className="errors-average__icon"/>
        <div className="errors-average__text">
          <div className="errors-average__header">Errors: 0,12%</div>
          <div className="errors-average__value">Average: 0,11%</div>
        </div>
      </div>
      <div className="errors-average__item">
        <div className="errors-average__icon"/>
        <div className="errors-average__text">
          <div className="errors-average__header">Zeroes: 5,12%</div>
          <div className="errors-average__value">Average: 0,11%</div>
        </div>
      </div>
      <div className="errors-average__item">
        <div className="errors-average__icon"/>
        <div className="errors-average__text">
          <div className="errors-average__header">Temeouts: 0,12%</div>
          <div className="errors-average__value">Average: 0,11%</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorsAveragePanel;