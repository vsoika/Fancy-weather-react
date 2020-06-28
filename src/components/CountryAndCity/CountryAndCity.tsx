import React, { Component } from 'react';
import { OPENCAGEDATA_API_KEY } from '../../constants';

interface ICountryAndCityState {
  city: String;
  country: String;
}

interface ICountryAndCityProps {
  inputCity: string;
  getCityName: (currentCity: string, inputCity: string) => void;
  language: string;
}

class CountryAndCity extends Component<
  ICountryAndCityProps,
  ICountryAndCityState
> {
  state = {
    city: '',
    country: '',
  };

  async componentDidMount() {
    console.log(44444444444, this.state.city);
    const { language } = this.props;

    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;
      console.log(language);
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${OPENCAGEDATA_API_KEY}=1&language=${language}`;
      const response = await fetch(url);
      const data = await response.json();

      /* Check return value for lesser known cities */
      data.results.find((item: any) => {
        console.log(item);
        if (item.components.city) {
          this.setState({
            city: item.components.city,
            country: item.components.country,
          });
          return true;
        }
      });

      this.props.getCityName(this.state.city, '');
    });
  }

  getSearchCity = async (searchCity: string, language: string) => {
    console.log(language);
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchCity}&key=${OPENCAGEDATA_API_KEY}=1&language=${language}`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      city: data.results[0].components.city || data.results[0].components.state,
      country: data.results[0].components.country,
    });

    /* Check return value for lesser known cities */
    // data.results.find((item: any) => {
    //   console.log("item: ", item)
    //   if(item.components.city) {
    //     this.setState({
    //       city: item.components.city,
    //       country: item.components.country,
    //     });
    //     return true;
    //   }

    // });
  };

  componentWillReceiveProps = (nextProps: any) => {
    if (nextProps.inputCity !== this.props.inputCity) {
      if (nextProps.inputCity) {
        this.getSearchCity(nextProps.inputCity, nextProps.language);
      }
    }

    if (nextProps.language !== this.props.language) {
      if (nextProps.language) {
        console.log(this.state.city, nextProps.language);
        this.getSearchCity(this.state.city, nextProps.language);
      }
    }
  };

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
