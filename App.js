import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {initStore} from './src/redux/store/store'
import * as Font from 'expo-font';
import Nav from './src/pages/Nav';

const store = initStore();


class NoteTaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontsLoaded: false
    }
  }

  componentDidMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Fredoka: require('./assets/fonts/Fredoka.ttf'),
      Inconsolata: require('./assets/fonts/Inconsolata.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  render () {
    if (this.state.fontsLoaded) {
      return (
        <Provider store={store}>
          <Nav />
        </Provider>
      );
    } else {
      return null;
    }
  }
}

export default NoteTaker;
