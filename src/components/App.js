import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, Footer, StorePage } from '.';
import './main.scss';

function App() {
  return (
    <Router>
      <div id="App">
        <NavBar />
        <Switch>
          <Route path="/">
            <StorePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
