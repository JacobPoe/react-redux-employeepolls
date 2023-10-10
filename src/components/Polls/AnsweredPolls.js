import { connect } from 'react-redux';

const AnsweredPolls = (props) => {
  return (
    <>
      <h1>Answered Polls</h1>
    </>
  );
};

export default connect((store) => ({
  authedUser: store.authedUser
}))(AnsweredPolls);
