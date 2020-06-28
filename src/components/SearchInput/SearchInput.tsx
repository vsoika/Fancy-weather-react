import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './SearchInput.scss';

interface ISearchInputProps {
  getInputCity: () => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ getInputCity }) => {
  const { t } = useTranslation();

  return (
    <InputGroup className="mb-3">
      <FormControl
        id="inputCity"
        placeholder={t('writeAcity')}
        aria-label="Search city"
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          className="search-btn"
          onClick={getInputCity}
        >
          {t('search')}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchInput;
