import React from 'react';
import {Provider} from "react-redux";

import Store from "./src/Store";
import {Header} from "./src/common/components";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header>Nico</Header>
        </View>
      </Provider>
    );
  }
}
