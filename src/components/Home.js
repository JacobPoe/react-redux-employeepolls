import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Ballot from './Ballot';

const Home = (props) => {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  useEffect(() => {
    const qs = Object.keys(props.questions).map((key) => {
      return props.questions[key];
    });

    const answeredQs = qs.filter((question) => {
      return checkIsAnswered(question);
    });
    setAnsweredQuestions(answeredQs);

    const unansweredQs = qs.filter((question) => {
      return !checkIsAnswered(question);
    });
    setUnansweredQuestions(unansweredQs);
  }, []);

  const checkIsAnswered = (question) => {
    // Combine the arrays of voters for each option
    // into one array
    const voters = [...question.optionOne.votes, ...question.optionTwo.votes];

    // Return whether or not the voters array
    // includes the logged-in user's ID
    return voters.includes(props.authedUser.id);
  };

  return (
    <>
      <h1>Home</h1>
      {/** TODO: Create a Polls component to render answered and unanswered polls */}
      <Tabs defaultActiveKey="unanswered" id="polls-tabs" className="mb-3">
        <Tab eventKey="unanswered" title="Unanswered">
          <Accordion>
            {unansweredQuestions.map((question) => {
              return (
                <Accordion.Item
                  id={question.id}
                  key={question.id}
                  eventKey={question.id}
                >
                  <Accordion.Header>
                    {`Question by @${question.author}`}
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
        </Tab>
        <Tab eventKey="answered" title="Answered">
          <Accordion>
            {answeredQuestions.map((question) => {
              return (
                <Accordion.Item
                  id={question.id}
                  key={question.id}
                  eventKey={question.id}
                >
                  <Accordion.Header>
                    <Image
                      src={props.users[question.author]?.avatarURL}
                      roundedCircle
                    />
                    {`Question by @${question.author}`}
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
        </Tab>
      </Tabs>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser,
  users: state.users,
  questions: state.questions
}))(Home);
