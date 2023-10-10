import { connect } from 'react-redux';

import { Accordion, Image } from 'react-bootstrap';

import Ballot from './Ballot';

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
          return (
            <Accordion.Item
              id={question.id}
              key={question.id}
              eventKey={question.id}
            >
              <Accordion.Header>
                {/* <Image
                  src={props.users[question.author]?.avatarURL}
                  roundedCircle
                /> */}
                {`Question by @${question.author} | ${time}`}
              </Accordion.Header>
              <Accordion.Body>
                <h2>WOULD YOU RATHER</h2>
                <hr />
                <div className="ballot-row">
                  <Ballot
                    className="ballot option-one"
                    option={{
                      number: 1,
                      contents: question.optionOne
                    }}
                    questionId={question.id}
                  />
                  <div className="ballot-or">
                    <h3>OR</h3>
                  </div>
                  <Ballot
                    className="ballot option-two"
                    option={{
                      number: 2,
                      contents: question.optionTwo
                    }}
                    questionId={question.id}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
    </Accordion>
  );
};

export default connect((store) => ({
  authedUser: store.authedUser
}))(UnansweredPolls);
