import React, { Component } from 'react';
import moment from 'moment';
import { clearInterval, setInterval } from 'timers';

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
    const date = moment(fullDate[0], 'DD/MM/YYYY').format('ddd, D MMMM YYYY');
    const time = fullDate[1];

    return (
      <div>
        {date}, {time}
      </div>
    );
  }
}

export default CurrentDate;
