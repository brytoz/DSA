const { createReadStream, createWriteStream } = require("node:fs");
const { Readable, Transform } = require("node:stream");
const readAbleStream = createReadStream("./file.txt");

// const stream = new MyStream({
//     highWaterMark: 1,
//   });

const stream = new Readable({
  highWaterMark: 1,
});
const net = require('node:net');
const server = net.createServer(function (socket) {
  // socket.on('error', console.error) // this prevents the server to crash
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});
stream.on("readable", () => {
  console.count(">> readable event");
  let chunk;
  while ((chunk = stream.read()) !== null) {
    console.log(chunk.toString()); // Process the chunk
  }
});
stream.on("data", () => console.log(">> Data end event"));
stream.on("end", () => console.log(">> end event"));
stream.on("error", () => console.log(">> Bad end event"));
server.listen(5002, '0.0.0.0');
