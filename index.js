const EventEmitter  = require("events")
const events = new EventEmitter()


// events 
// events.on("order", () => {
//     console.log("hello world")
// })

// events.emit("order")

const buffer = new Buffer.from("Vishwas")

console.log(buffer)
console.log(buffer.toJSON(buffer))



