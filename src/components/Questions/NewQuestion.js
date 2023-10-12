import { useState } from 'react';
import { connect } from 'react-redux';

import { _saveQuestion } from '../../_DATA';
import { addQuestion } from '../../actions/questions';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

import Login from '../Login';

const NewQuestion = (props) => {
  const navigate = useNavigate();

  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const createQuestion = () => {
    const toSubmit = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: props?.authedUser?.id
    };

    return toSubmit;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const question = createQuestion();

    const toDispatch = await _saveQuestion(question).catch((reject) => {
      setError(true);
      setIsSubmitting(false);
    });

    if (toDispatch) {
      props.dispatch(addQuestion(toDispatch));
      setError(false);

      navigate('/');
    }
  };

  return !props.authedUser ? (
    <Login />
  ) : (
    <>
      {error && (
        <h1 data-testid="error-message" style={{ color: 'red' }}>
          Error: Please ensure all fields are filled out.
        </h1>
      )}
      <h1>WOULD YOU RATHER</h1>
      <Form data-testid="test-form" onSubmit={(event) => handleSubmit(event)}>
        <p>Please enter two options for your peers to choose from</p>
        <Form.Group className="mb-3 poll-option" controlId="formOptionOne">
          <Form.Label>Option #1</Form.Label>
          <Form.Control
            data-testid="form-option-one"
            type="text"
            placeholder="Fight 100 duck-sized horses?"
            value={optionOne}
            onChange={(event) => setOptionOne(event.target.value)}
          />
        </Form.Group>
        <h3>OR</h3>
        <Form.Group className="mb-3 poll-option" controlId="formOptionTwo">
          <Form.Label>Option #2</Form.Label>
          <Form.Control
            data-testid="form-option-two"
            type="text"
            placeholder="Fight 1 horsed-sized duck?"
            value={optionTwo}
            onChange={(event) => setOptionTwo(event.target.value)}
          />
        </Form.Group>
        <br />
        <Button
          data-testid="form-submit"
          type="submit"
          className="poll-submit"
          variant="primary"
          disabled={(!optionOne && !optionTwo) || isSubmitting}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(NewQuestion);
