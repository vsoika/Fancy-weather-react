import React, { Component } from 'react';
import LanguageSelect from '../LanguageSelect';
import BackgroundButton from '../BackgroundButton';
import TemperatureUnitsButtons from '../TemperatureUnitsButtons';

interface IHeaderProps {
  activateFahrenheit: () => void,
  activateCelsius: () => void
}

class Header extends Component<IHeaderProps> {
  render() {
    const { activateCelsius, activateFahrenheit } = this.props;

    return (
      <header>
        <BackgroundButton />
        <LanguageSelect />
        <TemperatureUnitsButtons activateCelsius={activateCelsius} activateFahrenheit={activateFahrenheit}/>
      </header>
    );
  }
}

export default Header;
