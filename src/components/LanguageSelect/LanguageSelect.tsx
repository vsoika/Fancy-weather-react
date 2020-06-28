import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import i18n from 'i18next';

import './LanguageSelect.scss';

interface ILanguageSelectProps {
  setLanguage: (lang: string) => void;
}

class LanguageSelect extends Component<ILanguageSelectProps> {
  getLanguage = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { setLanguage } = this.props;
    const currentLanguage = e.currentTarget.value.toLowerCase();
    setLanguage(currentLanguage);
    i18n.changeLanguage(currentLanguage);
  };

  render() {
    return (
      <Form.Group controlId="select-language">
        <Form.Control as="select" onChange={this.getLanguage}>
          <option>EN</option>
          <option>RU</option>
          <option>BE</option>
        </Form.Control>
      </Form.Group>
    );
  }
}

export default LanguageSelect;
