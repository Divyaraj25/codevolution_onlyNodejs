// simple example of events

// const EventEmitter = require("node:events")
// const emitter = new EventEmitter()

// // this is an event listener, on emit event do this, event name remains same
// // you can add multiple event listener as per requirement.
// emitter.on('event', (data)=>{
//     console.log("Event is occured...!",data)
// })
// emitter.emit('event',"2-2-24") // ("eventname is any string", "arg1", "arg2",....)

const pizzaShop = require("./pizzaorder");

const order1 = new pizzaShop();

order1.on("order", (size) => {
  console.log(size, "\n");
});

order1.order("large");
order1.displayOrderNumber();
