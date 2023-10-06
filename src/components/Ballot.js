import { connect } from 'react-redux';

const Ballot = (props) => {
  return (
    <>
      <h1>Ballot</h1>
      {/**
       * This component will render one of two options associated with a question.
       *
       * It will display the text and the users who have voted for that option.
       */}
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(Ballot);
