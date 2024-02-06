import React from 'react';
import css from './FeedbackWidget.module.css';

const FeedbackWidget = ({
  onFeedback,
  statistics,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.container}>
      <h2>Please leave feedback</h2>
      <button className={css.button} onClick={() => onFeedback('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onFeedback('bad')}>
        Bad
      </button>
      <div className={css.statistics}>
        <h2>Statistics</h2>
        <p>Good: {statistics.good}</p>
        <p>Neutral: {statistics.neutral}</p>
        <p>Bad: {statistics.bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </div>
  );
};

export default FeedbackWidget;
