import React, { Component } from 'react';
import Container from './appContainer';
import PropTypes from 'prop-types' 
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from './styles/theme'
import Nav from './UI/Nav'
import Single from './countrySingle'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
        <Nav/>
          <Container/>
          <Single/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
