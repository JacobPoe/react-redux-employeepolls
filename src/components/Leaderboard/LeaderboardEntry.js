import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const LeaderboardEntry = ({ user }) => {
  return (
    <>
      <Card className="leaderboard-entry">
        <Card.Body>
          <Image src={user.avatarURL} thumbnail />
          <Card.Title>
            {user.name ? (
              <span data-testid="entry-name">{user.name}</span>
            ) : (
              <></>
            )}
          </Card.Title>
          <Card.Subtitle>
            {user.name ? <span data-testid="entry-id">@{user.id}</span> : <></>}
          </Card.Subtitle>
          <hr />
          <Card.Text>
            {user.questions ? (
              <span data-testid="entry-questions">
                # of Questions Asked: {user.questions.length}
              </span>
            ) : (
              <></>
            )}
          </Card.Text>
          <Card.Text>
            {user.answers ? (
              <span data-testid="entry-answers">
                # of Questions Answered: {Object.keys(user.answers).length}
              </span>
            ) : (
              <></>
            )}
          </Card.Text>
          <hr />
          <Card.Text>
            {user.questions ? (
              <span data-testid="entry-total">
                Total Votes Cast:{' '}
                {user.questions.length + Object.keys(user.answers).length}
              </span>
            ) : (
              <></>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default LeaderboardEntry;
