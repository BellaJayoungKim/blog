import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Note from './pages/Note';

const App = () => {
  const { palette } = useSelector(state => state);

  return (
    <ThemeProvider theme={palette}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Note">
          <Note />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
