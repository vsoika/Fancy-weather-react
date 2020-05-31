import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

import './SearchInput.scss';

interface ISearchInputProps {
  getCityName: (currentCity: string, inputCity: string) => void;
}

export default class SearchInput extends Component<ISearchInputProps> {
  getInputCity = () => {
    const inputCity = document.getElementById('inputCity') as HTMLInputElement;
    if(inputCity.value.length > 2) {
        this.props.getCityName('', inputCity.value);
    }
  };

  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          id="inputCity"
          placeholder="Write a city"
          aria-label="Search city"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" className="search-btn" onClick={this.getInputCity}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}
