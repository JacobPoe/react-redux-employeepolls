import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading-bar';

import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Nav';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './components/Question';

const App = (props) => {
  useEffect(() => {
    // TODO: write a props.dispatch() method to load initial questions data
  }, []);

  return (
    <>
      <LoadingBar />
      <div className="App">
        {props.loading === true ? (
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

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

export default connect(mapStateToProps)(App);
