import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AnsweredPolls from './Polls/AnsweredPolls';
import UnansweredPolls from './Polls/UnansweredPolls';

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
    // }, [props.questions]); // Still deciding how I want to reload state on vote
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
          <UnansweredPolls questions={unansweredQuestions} />
        </Tab>
        <Tab eventKey="answered" title="Answered">
          <AnsweredPolls questions={answeredQuestions} />
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
