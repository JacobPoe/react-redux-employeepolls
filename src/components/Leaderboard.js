import { connect } from 'react-redux';

const Leaderboard = (props) => {
  return (
    <>
      <h1>Leaderboard</h1>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(Leaderboard);
