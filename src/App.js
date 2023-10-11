import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading-bar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { handleInitialData } from './actions/shared';
import { setAuthedUser } from './actions/authedUser';

import FourOhFour from './components/404';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Login from './components/Login';
import NewQuestion from './components/Questions/NewQuestion';
import PollsNavbar from './components/PollsNavbar';
import Question from './components/Questions/Question';

const App = (props) => {
  // Load users and questions data on initial launch
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  useEffect(() => {
    // Set props.authedUser to null to force
    // reauthentication via the <Login /> component
    props.dispatch(setAuthedUser(null));
  }, []);

  return (
    <>
      <LoadingBar />
      <div className="App">
        {!props.authedUser ? (
          <Login />
        ) : (
          <>
            <PollsNavbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/leaderboard" element={<Leaderboard />} />
              <Route exact path="/new" element={<NewQuestion />} />
              <Route exact path="/question/:id" element={<Question />} />
              <Route path="*" element={<FourOhFour />} />
            </Routes>
          </>
        )}
      </div>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(App);
