import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading-bar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { handleInitialData } from './actions/shared';

import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Nav';
import Question from './components/Question';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <>
      <LoadingBar />
      <div className="App">
        {props.authedUser !== true ? (
          <Login />
        ) : (
          <>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/question/:id" element={<Question />} />
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
