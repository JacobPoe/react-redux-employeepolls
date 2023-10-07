import { connect } from 'react-redux';

const Ballot = (props) => {
  return (
    <>
      <h4>{props.option.text}</h4>
      <ul>
        {props.option.votes.map((voter) => {
          return <li key={voter}>{voter}</li>;
        })}
      </ul>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(Ballot);
