# Vicky's Flowers

Welcome to "Vicky's Flowers"! This is a small, single page application built in React for an interview code challenge!

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Please check out the [Create React App README](./CRA_README.md) for instructions on how to start the application.

## Requirements / Provided Specifications

### General

- It should work on Chrome, Firefox, IE, Edge, and Safari (Mac) browsers.
- Feel free to write the CSS with or without a pre-processor like Sass* or LESS.
- The page should be responsive and you can create your own media queries or use a framework like Bootstrap.
- Only the largest viewport has been provided so use your judgment when arranging the content for smaller devices.
- Add hover/active states to the navigation and products as you see fit.

### Javascript

- The product images are draggable items. The cart icon is the drop target.
- At the start of the application, populate every white dropdown/select below a product with a random quantity between 1 and 20.
- The total displayed in the cart will be zero, for both quantity and price.
- When the user drags and drops a product image onto the cart icon, add the quantity and keep a running total of all the items and amount added to the cart.
  - For example, say the total quantity is 2 and total price is $70.00. When a user drops a product with quantity 5 and price $35.00, then the total quantity becomes 7 and the total price becomes $245.00.
- After each successful drop, resets the quantities for every product with a new set of random numbers.
- If the user misses the cart icon when letting go of drag, then the product image snaps back to the starting location and there is no other change.
- Touch events do not need to be considered for purposes of this exercise. The draggable requirements will be evaluated on desktop in the browsers listed in the HTML/CSS section.
- Feel free to use a JavaScript library, framework and any plugins.  (E.g. Angular, etc.)

## Wireframe

This application was created based off of the wireframe below.

![Page Wireframe](/vickys-wireframe-screenshot.png)
