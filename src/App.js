import React, { Component } from 'react';
import Login from './components/Login';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
     return (
      <MuiThemeProvider>
        <Login />
      </MuiThemeProvider>
     );
  }
}





export default App;
