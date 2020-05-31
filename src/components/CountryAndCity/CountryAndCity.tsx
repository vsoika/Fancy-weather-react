import React, { Component } from 'react';

interface ICountryAndCityState {
  city: String;
  country: String;
}

interface ICountryAndCityProps {
  getCityName: (currentCity: string, inputCity: string) => void;
}

class CountryAndCity extends Component<ICountryAndCityProps, ICountryAndCityState> {
  state = {
    city: '',
    country: '',
  };

  async componentDidMount() {
    const url = 'https://api.ipdata.co/?api-key=28e4801f6049a2aa46524ac7944805e6c872286cbeb41bb6b5293038';
    const response = await fetch(url);
    const json = await response.json();

    console.log(json)

    this.setState({
      city: json.city,
      country: json.country_name,
    });

    this.props.getCityName(this.state.city, '');
  }

  render() {
    const { city, country } = this.state;

    return (
      <div>
        {city}, {country}
      </div>
    );
  }
}

export default CountryAndCity;
