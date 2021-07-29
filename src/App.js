import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body'
import Category from './Components/Category'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import { cyan } from '@material-ui/core/colors';
import ItemPage from './Components/ItemPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
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
              <Route exact path="/category/:str1/:str2">
                <Category />
              </Route>
              <Route exact path="/:str/:id">
                <ItemPage />
              </Route>
            </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
