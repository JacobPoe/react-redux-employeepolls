import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addQuestion } from '../../actions/questions';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

const NewQuestion = (props) => {
  const navigate = useNavigate();

  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const createQuestion = () => {
    const qid = uuid();
    return {
      id: qid,
      author: props.authedUser.id,
      optionOne: {
        votes: [],
        text: optionOne
      },
      optionTwo: {
        votes: [],
        text: optionTwo
      },
      timestamp: Date.now()
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const question = createQuestion();
    props.dispatch(addQuestion(question));

    navigate('/');
  };

  return (
    <>
      <h1>WOULD YOU RATHER</h1>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <p>Please enter two options for your peers to choose from</p>
        <Form.Group className="mb-3 poll-option" controlId="formOptionOne">
          <Form.Label>Option #1</Form.Label>
          <Form.Control
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
            type="text"
            placeholder="Fight 1 horsed-sized duck?"
            value={optionTwo}
            onChange={(event) => setOptionTwo(event.target.value)}
          />
        </Form.Group>
        <br />
        <Button
          type="submit"
          className="poll-submit"
          variant="primary"
          disabled={!optionOne || !optionTwo}
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
