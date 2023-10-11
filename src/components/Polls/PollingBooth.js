import { useState } from 'react';
import { connect } from 'react-redux';

import { _saveQuestionAnswer } from '../../_DATA';
import { handleCastVote } from '../../actions/shared';

import Ballot from './Ballot';

const PollingBooth = (props) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createQuestionAnswer = (option) => {
    const toSubmit = {
      authedUser: props.authedUser.id,
      qid: props.poll.question.id,
      answer: option
    };
    return toSubmit;
  };

  const castVote = async (option) => {
    setIsSubmitting(true);

    const answer = createQuestionAnswer(option);

    const toDispatch = await _saveQuestionAnswer(answer).catch((reject) => {
      alert('Failed to cast vote. Please try again. ');
      setIsSubmitting(false);
    });

    if (toDispatch) {
      props.dispatch(
        handleCastVote(props.authedUser, answer.answer, answer.qid)
      );
      setHasVoted(true);
      setIsSubmitting(false);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ballot-row">
      <Ballot
        optionKey={'optionOne'}
        option={props.poll.question.optionOne}
        parentId={props.poll.question.id}
        totalVoteCount={props.poll.totalVoteCount}
        hasVoted={hasVoted}
        isSubmitting={isSubmitting}
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
        isSubmitting={isSubmitting}
        castVoteCallback={castVote}
      />
    </div>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(PollingBooth);
