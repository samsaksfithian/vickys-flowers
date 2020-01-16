import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import BackEndDnD from 'react-dnd-html5-backend';
// TODO: look at Reach Router?
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, Footer, StorePage, NotFoundPage } from '.';
import { MIN_QUANTITY, MAX_QUANTITY, FLOWER_ITEMS } from './CONSTANTS';
import './main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total_cost: 0,
      cart_quantity: 0,
      quantities: [],
    };
  }

  componentDidMount() {
    this.randomizeQuantities();
  }

  /**
   * TODO:
   */
  randomizeQuantities = () => {
    const new_qs = [];
    for (let index = 0; index < FLOWER_ITEMS.length; index++) {
      const quant = Math.floor(Math.random() * MAX_QUANTITY + MIN_QUANTITY);
      new_qs.push(quant);
    }
    this.setState({ quantities: new_qs });
  };

  /**
   * TODO:
   */
  updateQuantity = (new_quantity, index) => {
    this.setState(prevState => {
      const new_qs = [...prevState.quantities];
      new_qs[index] = parseInt(new_quantity, 10);
      return { quantities: new_qs };
    });
  };

  /**
   * TODO:
   */
  addItem = item => {
    this.setState(prevState => ({
      total_cost: prevState.total_cost + item.price * item.quantity,
      cart_quantity: prevState.cart_quantity + item.quantity,
    }));
    this.randomizeQuantities();
  };

  render() {
    const { total_cost, cart_quantity, quantities } = this.state;

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
              <Route exact path="/">
                <StorePage quantities={quantities} updateQuantity={this.updateQuantity} />
              </Route>
              <Route path="/" component={NotFoundPage} />
            </Switch>
            <Footer />
          </div>
        </DndProvider>
      </Router>
    );
  }
}
