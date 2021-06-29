import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import { Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import { cyan } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: cyan[500],
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <Header name='John' />
          <Body/>
      </div>
    </ThemeProvider>
  );
}

export default App;
