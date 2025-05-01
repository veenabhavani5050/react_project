// server.js
const app = require('./app'); // Import the application

app.listen(3001, '127.0.0.1', () => {
  console.log("The server is running at http://127.0.0.1:3001");
});
