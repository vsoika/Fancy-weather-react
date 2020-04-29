import React, { Component } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { ArrowCounterclockwise } from 'react-bootstrap-icons';
import { UNSPLASH_API_KEY } from '../../constants';

interface IBackgroundButtonState {
  isError: boolean;
}

class BackgroundButton extends Component<{}, IBackgroundButtonState> {
  state = {
    isError: false,
  };

  async componentDidMount() {
    await this.searchPhoto();
  }

  searchPhoto = async () => {
    try {
      const url = `https://api.unsplash.com/photos/random?query=nature&client_id=${UNSPLASH_API_KEY}&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`;
      const response = await fetch(url);
      const data = await response.json();
      const urlImage = data.urls.regular;
      document.body.style.background = `url(${urlImage}) center no-repeat fixed`;
      document.body.style.backgroundSize = 'cover';

      if (this.state.isError) {
        this.setState({
          isError: false,
        });
      }
    } catch {
      this.setState({
        isError: true,
      });
    }
  };

  render() {
    const { isError } = this.state;

    return (
      <>
        {isError ? (
          <Alert variant="warning">
            Image upload limit has been reached. Please, wait some time.
          </Alert>
        ) : (
          <Button variant="outline-info" onClick={this.searchPhoto}>
            <ArrowCounterclockwise size={25} />
          </Button>
        )}
      </>
    );
  }
}

export default BackgroundButton;
