import { useState } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const unauthedUser = {
      username: username,
      password: password
    };
    console.log(unauthedUser);

    /**
     * TODO: Handle login logic
     * 1) Check to see if user w/ entered username exists in store
     * 2) If user exists, check if passwords match
     * 3) If user doesn't exist, alert error
     * 4) If user exists, update store andredirect to homepage
     */

    // TODO: Update store to set logged in user on success
  };

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleLogin}>
          <Modal.Body>
            <p>Please log in to vote</p>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button type="submit" variant="primary">
              Log In
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Dialog>
    </div>
  );
};

const mapStateToProps = ({ props }) => ({});

export default connect(mapStateToProps)(Login);
