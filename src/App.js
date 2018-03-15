import React, { Component } from 'react';
import Container from './appContainer';
import PropTypes from 'prop-types' 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/theme'
import Nav from './UI/Nav'

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
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
