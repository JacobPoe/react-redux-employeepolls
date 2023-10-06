import { connect } from 'react-redux';

const Leaderboard = (props) => {
  console.log(props.authedUser);
  return (
    <>
      <h1>Leaderboard</h1>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(Leaderboard);
