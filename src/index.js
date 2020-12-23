import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './redux/store';
import {Provider} from 'react-redux';

const store = configureStore();
//passing initial state to the configureStore overWrite the redux store. ex: localStorage

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
