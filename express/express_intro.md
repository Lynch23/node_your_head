Express is a web framework for Node.js. Express helps us to ;
- start up a server
- parse incoming requests
- match those requests to particular routes 
- craft out http response and associated content

Our first and simple use of expressjs

use the npm install express command

inside index.js
// js code

const express = require("express");
const app = express(); // returns an object with properties and methods which help build an express app

// listening for incoming requests

app.listen(3000, () => {
	console.log('Listening on port 3000')
}); // these lines of code will run an express app that listens for incoming http requests on your local machine.

app.use(() => {
	console.log('Got a new request!');
}); // this line will console.log every time a new request is sent to localhost:3000;

app.use([path], callback, [, callback...]) - mounts the specified middleware function or functions at the specified path. The middleware function is executed when the base of the reqquested path matches path.

app.listen(port, callback) - Binds and listens for connections on the specified host and port

and thats our first express js app!


