import { connect } from 'react-redux';

// import { handleCastVote } from '../../actions/shared';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Ballot = (props) => {
  // const castVote = () => {
  //   props.dispatch(handleCastVote());
  // };

  return (
    <>
      <Card className="ballot-card">
        <Card.Body>
          <Card.Title>Option #{}</Card.Title>
          <Card.Text>{}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{Object.keys(props).length} vote(s)</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(Ballot);
