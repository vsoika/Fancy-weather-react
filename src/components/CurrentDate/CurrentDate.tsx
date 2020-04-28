import React, { Component } from 'react';
import moment from 'moment';
import { clearInterval, setInterval } from 'timers';

import './CurrentDate.scss';

interface ICurrentDateProps {
  timezone: string;
}

interface ICurrentDateState {
  fullDate: string[];
  timerId: NodeJS.Timeout;
}

class CurrentDate extends Component<ICurrentDateProps, ICurrentDateState> {
  state = {
    fullDate: [],
    timerId: setInterval(() => this.tick(), 1000),
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(() => this.tick(), 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  tick = () => {
    this.setState({
      fullDate: new Date()
        .toLocaleString('en-GB', { timeZone: this.props.timezone })
        .split(','),
    });
  };

  render() {
    const { fullDate } = this.state;
    const date = moment(fullDate[0], 'DD/MM/YYYY').format('dddd, D MMMM');
    const time = fullDate[1];

    return (
      <div className="date-container">
        <span>{date}</span>
        <span>{time}</span> 
      </div>
    );
  }
}

export default CurrentDate;
