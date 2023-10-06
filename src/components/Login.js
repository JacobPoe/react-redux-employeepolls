import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { setAuthedUser } from '../actions/authedUser';

const Login = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('mtsamis');
  const [password, setPassword] = useState('xyz123');

  const clearForm = () => {
    setUsername('');
    setPassword('');
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    /**
     * TODO: Handle login logic
     * 1) Check to see if user w/ entered username exists in store  X
     * 2) If user exists, check if passwords match                  X
     * 3) If user doesn't exist, alert error                        X
     * 4) If user exists, update store andredirect to homepage
     */

    // 1
    const account = props.users[username] ? props.users[username] : undefined;

    // 2 & 3
    if (!account || account.password !== password) {
      alert('Invalid credentials. Please try again.');
      clearForm();
    } else {
      alert(`Welcome, ${username}!`);
      // TODO: Implement step 4
      props.dispatch(setAuthedUser(account));
      navigate('/');
    }
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
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              type="submit"
              variant="primary"
              disabled={username === '' || password === ''}
            >
              Log In
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Dialog>
    </div>
  );
};

export default connect((state) => ({
  users: state.users,
  authedUser: state.authedUser
}))(Login);
