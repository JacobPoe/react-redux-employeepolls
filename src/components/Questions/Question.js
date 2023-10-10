import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import FourOhFour from '../404';

const Question = (props) => {
  const { id } = useParams();
  const question = props.questions[id];

  return !question ? <FourOhFour /> : question.id;
};

export default connect((state) => ({
  authedUser: state.authedUser,
  questions: state.questions
}))(Question);
