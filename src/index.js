import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'grommet-css';
import './index.css';
import App from './App';
// React Router
import { BrowserRouter } from 'react-router-dom';
// Redux state manangement
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers/index';

const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider
    store={storeWithMiddleware(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
