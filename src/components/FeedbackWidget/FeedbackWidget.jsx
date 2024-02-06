import React from 'react';
import css from './FeedbackWidget.module.css';

const FeedbackWidget = ({ onFeedback, statistics }) => {
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
      </div>
    </div>
  );
};

export default FeedbackWidget;
