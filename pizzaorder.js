const EventEmitter = require("node:events");
const emitter = new EventEmitter();

class pizzaShop extends EventEmitter {
  constructor() {
    super(); // constructor from eventemitter
    this.orderNumber = 0;
  }
  order(size) {
    this.orderNumber++;
    this.emit("order", size);
  }
  displayOrderNumber() {
    console.log(`The current Order Number is ${this.orderNumber}`);
  }
}

module.exports = pizzaShop;
