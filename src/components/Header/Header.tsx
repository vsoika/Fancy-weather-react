import React, { Component } from 'react';
import LanguageSelect from '../LanguageSelect';
import BackgroundButton from '../BackgroundButton';
import TemperatureUnitsButtons from '../TemperatureUnitsButtons';
import SearchInput from '../SearchInput';

import './Header.scss';

interface IHeaderProps {
  activateFahrenheit: () => void;
  activateCelsius: () => void;
  getCityName: (currentCity: string, inputCity: string) => void;
}

class Header extends Component<IHeaderProps> {
  render() {
    const { activateCelsius, activateFahrenheit, getCityName } = this.props;

    return (
      <header>
        <BackgroundButton />
        <LanguageSelect />
        <TemperatureUnitsButtons
          activateCelsius={activateCelsius}
          activateFahrenheit={activateFahrenheit}
        />
        <SearchInput getCityName={getCityName}/>
      </header>
    );
  }
}

export default Header;
