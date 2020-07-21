import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import MapComponent from '../MapComponent';


import './MapModal.scss';

interface IMapModalProps {
    show: boolean;
    onHide: () => void;
    latitude: number;
    longitude: number;
  }

const MapModal: React.FC<IMapModalProps> = (props) => {
    const { latitude, longitude, ...modalProps } = props;

    return (
      <Modal
        {...modalProps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Body>
            <MapComponent latitude={latitude} longitude={longitude}></MapComponent>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MapModal;