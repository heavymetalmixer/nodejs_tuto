// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on("response", (name, id) => {
  console.log(`Data received. User ${name} with ID:${id}`);
});

customEmitter.on("response", () => {
  console.log("Some other logic here");
});

customEmitter.emit("response", "John", 34);
