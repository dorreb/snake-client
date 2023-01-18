const net = require("net");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server',);
  });
  conn.write('Name: ASH');

  // setTimeout(() => {
  //   conn.write('Move: up');
  // }, 100);

  // setTimeout(() => {
  //   conn.write('Move: left');
  // }, 300);

  // setTimeout(() => {
  //   conn.write('Move: down');
  // }, 500);

  //   // client.js
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");

module.exports = { connect };



