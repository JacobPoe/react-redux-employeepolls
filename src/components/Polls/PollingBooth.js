import { useState } from 'react';
import { connect } from 'react-redux';

import { handleCastVote } from '../../actions/shared';

import Ballot from './Ballot';

const PollingBooth = (props) => {
  const [hasVoted, setHasVoted] = useState(false);

  const castVote = (parentId, option) => {
    console.log('casting vote: ', parentId, option);
    setHasVoted(true);
    props.dispatch(
      handleCastVote({
        userId: props.authedUser.id,
        questionId: props.poll.question.id,
        selectedOption: option
      })
    );
  };

  return (
    <>
      <Ballot
        optionKey={'optionOne'}
        option={props.poll.question.optionOne}
        parentId={props.poll.question.id}
        totalVoteCount={props.poll.totalVoteCount}
        hasVoted={hasVoted}
        castVoteCallback={castVote}
      />
      <div className="ballot-or">
        <h4>OR</h4>
      </div>
      <Ballot
        optionKey={'optionTwo'}
        option={props.poll.question.optionTwo}
        parentId={props.poll.question.id}
        totalVoteCount={props.poll.totalVoteCount}
        hasVoted={hasVoted}
        castVoteCallback={castVote}
      />
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(PollingBooth);
