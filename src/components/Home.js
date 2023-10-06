import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(Home);
