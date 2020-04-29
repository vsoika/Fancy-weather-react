import React, { Component } from 'react';
import LanguageSelect from '../LanguageSelect';
import BackgroundButton from '../BackgroundButton';
import TemperatureUnitsButtons from '../TemperatureUnitsButtons';

class Header extends Component {
  render() {
    return (
      <header>
        <BackgroundButton />
        <LanguageSelect />
        <TemperatureUnitsButtons />
      </header>
    );
  }
}

export default Header;
