import React from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Body from './components/Body/index';
import Category from './components/Category/index';
import ItemPage from './components/Item/index';
import Donate from './components/Donate';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#060806',
    },
    secondary: {
      main: '#00FFFF',
    }
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="App">
            <Header name='John' />
            <Switch>
              <Route exact path='/'>
                <Body />
              </Route>
              <Route exact path="/tv">
                <Category media='tv' />
              </Route>
              <Route exact path='/movies'>
                <Category media='movie' />
              </Route>
              <Route exact path="/:str/:id">
                <ItemPage />
              </Route>
            </Switch>
            <Donate />
            <Footer/>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
