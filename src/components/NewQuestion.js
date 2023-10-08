import { connect } from 'react-redux';

const NewQuestion = (props) => {
  return (
    <>
      <h1>New Question</h1>
    </>
  );
};

export default connect((state) => {
  state.authedUser;
})(NewQuestion);
