import React, { Component } from "react";
import { Provider } from "react-redux";
import initStore from "./src/redux/store/store";
import * as Font from "expo-font";
import Router from "./src/pages/Router";

const store = initStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  componentDidMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Fredoka: require("./assets/fonts/Fredoka.ttf"),
      Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
      Inconsolata: require("./assets/fonts/Inconsolata.ttf"),
      JosefinSans: require("./assets/fonts/JosefinSans.ttf"),
      JosefinSansItalic: require("./assets/fonts/JosefinSansItalic.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    } else {
      return null;
    }
  }
}

export default App;
