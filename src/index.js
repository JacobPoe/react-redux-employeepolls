import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';

import './index.css';
import App from './App';

import reducers from './reducers';
import middleware from './middleware';

// Class was taught using outdated createStore
// and not more up-to-date configureStore
const store = createStore(reducers, middleware);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
