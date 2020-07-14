import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import { WiCelsius, WiFahrenheit } from 'weather-icons-react';

import './TemperatureUnitsButtons.scss';

const btnActiveClassName = 'btn-info';
const btnDefaultClassName = 'btn-outline-info';
const celsiusName = 'celsius';
const fahrenheitName = 'fahrenheit';

interface ITemperatureUnitsButtonsProps {
  activateFahrenheit: () => void;
  activateCelsius: () => void;
}

class TemperatureUnitsButtons extends Component<ITemperatureUnitsButtonsProps> {
  state = {
    activeUnit: celsiusName,
  };

  highlightButton = (e: React.SyntheticEvent): void => {
    const { activeUnit } = this.state;
    const activeButton = e.target as HTMLInputElement;
    let siblingButton;

    activeButton.classList.replace(btnDefaultClassName, btnActiveClassName);

    if (activeButton.className.includes(celsiusName)) {
      siblingButton = activeButton.nextSibling as HTMLElement;
      this.setState(prevState => {
        if (prevState !== activeUnit) {
          return { activeUnit: celsiusName };
        }
      });
      this.props.activateCelsius();
    } else {
      siblingButton = activeButton.previousSibling as HTMLElement;
      this.setState(prevState => {
        if (prevState !== activeUnit) {
          return { activeUnit: fahrenheitName };
        }
      });
      this.props.activateFahrenheit();
    }

    siblingButton.classList.replace(btnActiveClassName, btnDefaultClassName);
  };

  render() {
    return (
      <div className="temperature-btn-container">
        <Button
          variant="info"
          className="celsius-button"
          onClick={this.highlightButton}
        />
        <Button
          variant="outline-info"
          className="fahrenheit-button"
          onClick={this.highlightButton}
        />
      </div>
    );
  }
}

export default TemperatureUnitsButtons;
