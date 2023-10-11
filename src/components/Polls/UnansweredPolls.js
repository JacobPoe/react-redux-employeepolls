import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Accordion, Image } from 'react-bootstrap';

import PollingBooth from './PollingBooth';

const UnansweredPolls = (props) => {
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
                {`@${question.author} | ${time}`}
              </Accordion.Header>
              <Accordion.Body>
                <h3>WOULD YOU RATHER</h3>
                <br />
                <div className="poll-teaser">
                  <PollingBooth
                    poll={{
                      question: question,
                      totalVoteCount: totalVoteCount
                    }}
                  />
                </div>
                <hr />
                <h6>
                  <Link to={`/question/${question.id}`}>
                    Click here to vote!
                  </Link>
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
}))(UnansweredPolls);
