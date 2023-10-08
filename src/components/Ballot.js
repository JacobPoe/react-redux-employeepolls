import { connect } from 'react-redux';

import { handleCastVote } from './../actions/shared';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Ballot = (props) => {
  const castVote = () => {
    props.dispatch(
      handleCastVote({
        userId: props.authedUser.id,
        questionId: props.questionId,
        selectedOption: props.option.number === 1 ? 'optionOne' : 'optionTwo',
        unselectedOption: props.option.number !== 1 ? 'optionOne' : 'optionTwo'
      })
    );
  };

  return (
    <>
      <Card className="ballot-card" onClick={() => castVote()}>
        <Card.Body>
          <Card.Title>Option #{props.option.number === 1 ? 1 : 2}</Card.Title>
          <Card.Text>{props.option.contents.text}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            {Object.keys(props.option.contents.votes).length} vote(s)
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(Ballot);
