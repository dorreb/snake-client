const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  //   // client.js
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");

module.exports = connect;









// const net = require("net");

// // establishes a connection with the game server
// const connect = function() {
//   const conn = net.createConnection({
//     host: 'localhost',
//     port: '50541'

//   });
// };

// module.exports = connect;