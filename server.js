// Step 1: Import the http module
const http = require('http');

// Step 2: Create a server
// post man inside this url is working or not checking
const server = http.createServer((req, res) => {
  // this is showing in your vs terminal
  // this is used requst wich mothod is used in postman and which url is used
  console.log("Request Received");
  console.log(`Request URL: ${req.url}`);
  console.log(`Request MOTHOD: ${req.method}`);

  // console.log(`Request URL:${res.url}`);
  // this "res.end" this is showing in your postman terminal
  res.end("request is send to postman"); 
});

// Step 3: Start the server
server.listen(3001, '127.0.0.1', () => {
  console.log("Server is running at http://127.0.0.1:3001");
});
