import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {initStore} from './src/redux/store/store'

import Nav from './src/pages/Nav';

const store = initStore();

class NoteTaker extends Component {
  render () {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}

export default NoteTaker;
