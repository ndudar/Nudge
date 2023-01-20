import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function InfoToast() {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2" variant="warning">
          <strong>?</strong>
        </Button>
        <ToastContainer position="middle-center">
        <Toast show={showA} onClose={toggleShowA} bg="warning">
          <Toast.Header>
            {/* <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            /> */}
            <strong className="me-auto">Topic Placeholder</strong>
            <small>Time Total Placeholder</small>
          </Toast.Header>
          <Toast.Body>Information placeholder.</Toast.Body>
        </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default InfoToast;
