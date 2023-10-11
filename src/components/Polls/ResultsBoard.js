import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Result from './Result';

const ResultsBoard = (props) => {
  return (
    <>
      <div className="result-row">
        <Result
          optionKey={1}
          option={props.question.optionOne}
          totalVoteCount={props.totalVoteCount}
        />
        <div className="result-or">
          <h4>OR</h4>
        </div>
        <Result
          optionKey={2}
          option={props.question.optionTwo}
          totalVoteCount={props.totalVoteCount}
        />
      </div>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(ResultsBoard);
