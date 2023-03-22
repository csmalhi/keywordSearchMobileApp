import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {initStore} from './src/redux/store/store'

import App from './src/pages/App';

const store = initStore();

class NoteTaker extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default NoteTaker;
