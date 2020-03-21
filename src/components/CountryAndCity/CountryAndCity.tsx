import React, { Component } from 'react';
import countryList from 'react-select-country-list';

interface ICountryAndCityState {
  city: String;
  country: String;
}

class CountryAndCity extends Component<{}, ICountryAndCityState> {
  state = {
    city: '',
    country: '',
  };

  async componentDidMount() {
    const url = 'https://ipinfo.io/json?token=23a12f21699c5a';
    const response = await fetch(url);
    const json = await response.json();

    this.setState({
      city: json.city,
      country: json.country,
    });
  }

  render() {
    const { city, country } = this.state;
    const countryFullName = countryList().getLabel(country);

    return (
      <div>
        {city},{countryFullName}
      </div>
    );
  }
}

export default CountryAndCity;
