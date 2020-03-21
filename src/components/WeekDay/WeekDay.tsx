import React, { Component } from 'react';

interface IWeekDayProps {
    identifier: number;
}

interface IWeekDayState {
    now: Date;
    sum: number;
    weekDay: string;
}

class WeekDay extends Component<IWeekDayProps, IWeekDayState> {
    state = {
        now: new Date,
        sum: 0,
        weekDay: '',
    }

    getWeekDay = () => {
        
    }

    render() {
        return null
    }
    
}

export default WeekDay;