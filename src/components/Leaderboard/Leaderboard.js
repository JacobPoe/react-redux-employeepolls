import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

import Login from '../Login';
import LeaderboardEntry from './LeaderboardEntry';

const Leaderboard = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handleSetUsers = () => {
      // Convert users obj to array to use sort()
      let sortedUsers = Object.values(props.users);

      // Sort descending by the number of votes cast per user
      sortedUsers.sort((a, b) => {
        return (
          Object.keys(b.answers).length +
          Object.keys(b.questions).length -
          (Object.keys(a.answers).length + Object.keys(a.questions).length)
        );
      });

      setUsers(sortedUsers);
    };

    handleSetUsers();
  }, [props.authedUser]);
  return !props.authedUser ? (
    <Login />
  ) : (
    <>
      <Container>
        <Row>
          <h1>Leaderboard</h1>
        </Row>
        <Row>
          <Col md={3} />

          <Col md={6} className="text-center">
            {users.map((user) => {
              return (
                <LeaderboardEntry key={`leaderboard__${user.id}`} user={user} />
              );
            })}
          </Col>

          <Col md={3} className="text-center" />
        </Row>
      </Container>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser,
  users: state.users
}))(Leaderboard);
