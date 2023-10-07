import { connect } from 'react-redux';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      {/** TODO: Create a Polls component to render answered and unanswered polls */}
      <Tabs defaultActiveKey="answered" id="polls-tabs" className="mb-3">
        <Tab eventKey="answered" title="Answered">
          Tab content for Answered Polls
        </Tab>
        <Tab eventKey="unanswered" title="Unanswered">
          Tab content for Unanswered Polls
        </Tab>
      </Tabs>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser,
  questions: state.questions
}))(Home);
