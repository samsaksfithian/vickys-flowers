import React from 'react';
import { DndProvider } from 'react-dnd';
import BackEndDnD from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { NavBar, Footer, StorePage } from '.';
import './main.scss';

function App() {
  return (
    <Router>
      <DndProvider backend={BackEndDnD}>
        <div id="App">
          <NavBar />
          <Switch>
            <Redirect from="/:anything" to="/" />
            <Route exact path="/">
              <StorePage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </DndProvider>
    </Router>
  );
}

export default App;
