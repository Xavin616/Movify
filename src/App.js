import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body'
import Category from './Components/Category'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import { cyan } from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: '#fff',
    }
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <div className="App">
            <Header name='John' />
            <Switch>
              <Route exact path='/'>
                <Body />
              </Route>
              <Route>
                <Category />
              </Route>
            </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
