import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card';

const Ballot = (props) => {
  return (
    <Card
      className={[
        'ballot-card',
        props.hasVoted ? 'has-voted' : '',
        props.option.votes.includes(props.authedUser.id) ? 'user-vote' : ''
      ]}
      onClick={() => {
        props.castVoteCallback(props.parentId, props.optionKey);
      }}
    >
      <Card.Header>
        Option #{props.optionKey === 'optionOne' ? 1 : 2}
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.option.text}</Card.Title>
        <hr />
        <div className={[props.hasVoted ? 'result-show' : 'result-hide']}>
          <Card.Text>Total Votes: {props.option.votes.length}</Card.Text>
          <Card.Text>
            Percentage:{' '}
            {(props.option.votes.length / props.totalVoteCount) * 100}%
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(Ballot);
