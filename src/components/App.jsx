import React, { Component } from 'react';
import FeedbackWidget from './FeedbackWidget/FeedbackWidget';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <FeedbackWidget
          onFeedback={this.handleFeedback}
          statistics={this.state}
        />
      </div>
    );
  }
}

export { App };
