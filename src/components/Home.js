import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Ballot from './Ballot';

const Home = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const qs = Object.keys(props.questions).map((key) => {
      return props.questions[key];
    });

    setQuestions(qs);
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
          Tab content for Unanswered Polls
          <Accordion>
            {questions
              .filter((question) => {
                return !checkIsAnswered(question);
              })
              .map((question) => {
                return (
                  <Accordion.Item key={question.id} eventKey={question.id}>
                    <Accordion.Header>{`Unanswered Question by @${question.author}`}</Accordion.Header>
                    <Accordion.Body>
                      <Ballot option={question.optionOne} />
                      <hr />
                      <Ballot option={question.optionTwo} />
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
          </Accordion>
        </Tab>
        <Tab eventKey="answered" title="Answered">
          Tab content for Answered Polls
          <Accordion>
            {questions
              .filter((question) => {
                return checkIsAnswered(question);
              })
              .map((question) => {
                return (
                  <Accordion.Item key={question.id} eventKey={question.id}>
                    <Accordion.Header>{`Unanswered Question by @${question.author}`}</Accordion.Header>
                    <Accordion.Body>
                      <Ballot option={question.optionOne} />
                      <hr />
                      <Ballot option={question.optionTwo} />
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
  questions: state.questions
}))(Home);
