import React, { Component } from 'react';
import countryList from 'react-select-country-list';

interface ICountryAndCityState {
  city: String;
  country: String;
}

interface ICountryAndCityProps {
  getCityName: (cityName: string) => void;
}

class CountryAndCity extends Component<ICountryAndCityProps, ICountryAndCityState> {
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

    this.props.getCityName(this.state.city);
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
