import { connect } from 'react-redux';

// import { handleCastVote } from '../../actions/shared';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Ballot = (props) => {
  // const castVote = () => {
  //   props.dispatch(handleCastVote());
  // };

  return (
    <Card
      className={[
        'ballot-card',
        props.option.votes.includes(props.authedUser.id) ? 'user-vote' : ''
      ]}
    >
      <Card.Header>Option #{props.optionKey}</Card.Header>
      <Card.Body>
        <Card.Title>{props.option.text}</Card.Title>
        <hr />
        <Card.Text>Total Votes: {props.option.votes.length}</Card.Text>
        <Card.Text>
          Percentage: {(props.option.votes.length / props.totalVoteCount) * 100}
          %
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(Ballot);
