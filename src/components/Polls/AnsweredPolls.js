import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Accordion, Image } from 'react-bootstrap';

import ResultsBoard from './ResultsBoard';

const AnsweredPolls = (props) => {
  return (
    <Accordion>
      {props.questions
        .sort((a, b) => {
          return b.timestamp - a.timestamp;
        })
        .map((question) => {
          const time = new Date(question.timestamp)
            .toLocaleDateString('en-us')
            .toString();

          const totalVoteCount =
            question.optionOne.votes.length + question.optionTwo.votes.length;

          return (
            <Accordion.Item
              key={`poll__${question.id}`}
              eventKey={`poll__${question.id}`}
            >
              <Accordion.Header>
                <Image
                  src={`${props.users[question.author].avatarURL}`}
                  thumbnail
                />
                {`@${question.author} | ${time}`}
              </Accordion.Header>
              <Accordion.Body>
                <h3>WOULD YOU RATHER</h3>
                <br />
                <ResultsBoard
                  question={question}
                  totalVoteCount={totalVoteCount}
                />
                <hr />
                <h6>
                  <Link to={`/question/${question.id}`}>Link to poll</Link>
                </h6>
                <h6>{question.id}</h6>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
    </Accordion>
  );
};

export default connect((store) => ({
  authedUser: store.authedUser,
  users: store.users
}))(AnsweredPolls);
