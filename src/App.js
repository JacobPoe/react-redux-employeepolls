import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading-bar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { handleInitialData } from './actions/shared';

import FourOhFour from './components/404';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import PollsNavbar from './components/PollsNavbar';
import Question from './components/Question';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
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
