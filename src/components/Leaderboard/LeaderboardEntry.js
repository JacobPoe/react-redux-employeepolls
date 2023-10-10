import { connect } from 'react-redux';

import { Card } from 'react-bootstrap';

const LeaderboardEntry = ({ user }) => {
  return (
    <>
      <Card className="leaderboard-entry">
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle>@{user.id}</Card.Subtitle>
          <hr />
          <Card.Text># of Questions Asked: {user.questions.length}</Card.Text>
          <Card.Text>
            # of Questions Answered: {Object.keys(user.answers).length}
          </Card.Text>
          <hr />
          <Card.Text>
            Total Votes Cast:{' '}
            {user.questions.length + Object.keys(user.answers).length}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default connect((state) => ({
  users: state.users
}))(LeaderboardEntry);