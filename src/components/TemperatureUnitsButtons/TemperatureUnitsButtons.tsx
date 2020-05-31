import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import { WiCelsius, WiFahrenheit } from 'weather-icons-react';

import './TemperatureUnitsButtons.scss'

interface ITemperatureUnitsButtonsProps {
	activateFahrenheit: () => void,
	activateCelsius: () => void
  }

class TemperatureUnitsButtons extends Component<ITemperatureUnitsButtonsProps> {

	render() {
		const { activateCelsius, activateFahrenheit } = this.props;

		return (
            <div className="temperature-btn-container">
			<Button variant="outline-info" className="celsius-button" onClick={activateCelsius}/>
            <Button variant="outline-info" className="fahrenheit-button" onClick={activateFahrenheit}/>
            </div>
		);
	}
}

export default TemperatureUnitsButtons;
