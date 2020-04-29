import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import { WiCelsius, WiFahrenheit } from 'weather-icons-react';

import './TemperatureUnitsButtons.scss'

class TemperatureUnitsButtons extends Component {
	render() {
		return (
            <>
			<Button variant="outline-info" className="celsius-button" />
            <Button variant="outline-info" className="fahrenheit-button" />
            </>
		);
	}
}

export default TemperatureUnitsButtons;
