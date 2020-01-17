import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import BackEndDnD from 'react-dnd-html5-backend';
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
   * A function to randomize the quantities stored in state for the store items.
   * Generates a quantity for each item from the provided/constant `FLOWER_ITEMS` array
   * that is a random number between the provided/constant `MAX_QUANTITY` and `MIN_QUANTITY`.
   * Sets the array of newly generated quantities in `this.state`.
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
   * Updates the quantity value in state for a particular store item. Used to update the
   * app-wide state quantity stored when a `<select>` dropdown is changed. Updates the
   * correct quantity and stores in `this.state`
   * @param {number} new_quantity the new value of the desired quantity
   * @param {number} index the index of the store item for which the quantity should be changed
   */
  updateQuantity = (new_quantity, index) => {
    this.setState(prevState => {
      const new_qs = [...prevState.quantities];
      new_qs[index] = parseInt(new_quantity, 10);
      return { quantities: new_qs };
    });
  };

  /**
   * Takes in an item object and "adds it to the cart" by updating the cart's total cost 
   * and quantity accordingly in `this.state`. Then it also randomizes all of the item quantities.
   * @param {object} item the item object that was added to the cart
   * @param {number} item.price the price of the item added
   * @param {number} item.quantity the quantity of the item added
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
