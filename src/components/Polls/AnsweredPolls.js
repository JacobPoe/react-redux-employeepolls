import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Accordion } from 'react-bootstrap';

import Result from './Result';

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
              <Accordion.Header>{`Question by @${question.author} | ${time}`}</Accordion.Header>
              <Accordion.Body>
                <div className="result-row">
                  <Result
                    optionKey={1}
                    option={question.optionOne}
                    totalVoteCount={totalVoteCount}
                  />
                  <Result
                    optionKey={2}
                    option={question.optionTwo}
                    totalVoteCount={totalVoteCount}
                  />
                </div>
                <hr />
                <h6>
                  <Link to={`/question/${question.id}`}>
                    Link to poll results
                  </Link>
                </h6>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
    </Accordion>
  );
};

export default connect((store) => ({
  authedUser: store.authedUser
}))(AnsweredPolls);
