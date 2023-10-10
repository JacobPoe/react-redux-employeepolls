import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Accordion, Image } from 'react-bootstrap';

import { handleCastVote } from '../../actions/shared';

import Ballot from './Ballot';

const UnansweredPolls = (props) => {
  // console.log(props);
  const castVote = () => {
    props.dispatch(handleCastVote());
  };
  return;
  // <Accordion>
  //   {props.questions
  //     .sort((a, b) => {
  //       return b.timestamp - a.timestamp;
  //     })
  //     .map((question) => {
  //       console.log(question);
  //       const time = new Date(question.timestamp)
  //         .toLocaleDateString('en-us')
  //         .toString();
  //       return (
  //         <Accordion.Item
  //           id={question.id}
  //           key={question.id}
  //           eventKey={question.id}
  //         >
  //           <Accordion.Header>
  //             {`Question by @${question.author} | ${time}`}
  //           </Accordion.Header>
  //           <Accordion.Body>
  //             <h2>WOULD YOU RATHER</h2>
  //             <div className="ballot-row">
  //               <Ballot key="ballot__optionOne" option={question.optionOne} />
  //               <Ballot key="ballot__optionTwo" option={question.optionTwo} />
  //             </div>
  //             <hr />
  //             <h6>
  //               <Link to={`/question/${question.id}`}>
  //                 Link to poll results
  //               </Link>
  //             </h6>
  //           </Accordion.Body>
  //         </Accordion.Item>
  //       );
  //     })}
  // </Accordion>
};

export default connect((store) => ({
  authedUser: store.authedUser,
  questions: store.questions
}))(UnansweredPolls);
