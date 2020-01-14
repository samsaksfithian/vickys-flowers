import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import BackEndDnD from 'react-dnd-html5-backend';
// TODO: look at Reach Router?
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { NavBar, Footer, StorePage } from '.';
import './main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total_cost: 0,
      cart_quantity: 0,
    };
  }

  /**
   * TODO:
   */
  randomizeQuantities = () => {
    // TODO:
  };

  /**
   * TODO:
   */
  addItem = item => {
    console.log('Added item: ', item);
    this.setState(prevState => ({
      total_cost: prevState.total_cost + item.price * item.quantity,
      cart_quantity: prevState.cart_quantity + item.quantity,
    }));
    this.randomizeQuantities();
  };

  render() {
    const { total_cost, cart_quantity } = this.state;

    return (
      <Router>
        <DndProvider backend={BackEndDnD}>
          <div id="App">
            <NavBar
              total_cost={total_cost}
              quantity={cart_quantity}
              addItem={this.addItem}
            />
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
}
