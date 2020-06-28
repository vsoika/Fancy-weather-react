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
  setLanguage: (lang: string) => void;
}

class Header extends Component<IHeaderProps> {
  getInputCity = () => {
    const inputValue = document.getElementById('inputCity') as HTMLInputElement;
    const inputCity = inputValue.value.trim();
    if (inputCity.length > 2) {
      this.props.getCityName('', inputCity);
    }
  };

  render() {
    const { activateCelsius, activateFahrenheit, setLanguage } = this.props;

    return (
      <header>
        <BackgroundButton />
        <LanguageSelect setLanguage={setLanguage} />
        <TemperatureUnitsButtons
          activateCelsius={activateCelsius}
          activateFahrenheit={activateFahrenheit}
        />
        <SearchInput getInputCity={this.getInputCity} />
      </header>
    );
  }
}

export default Header;
