import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import './LanguageSelect.scss';

class LanguageSelect extends Component {

  render() {
    return (
      <Form.Group controlId="select-language">
        <Form.Control as="select">
          <option>EN</option>
          <option>RU</option>
          <option>BE</option>
        </Form.Control>
      </Form.Group>
    );
  }
}

export default LanguageSelect;
