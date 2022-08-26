Routing refers to determining on how an app responds to a client request to a specific endpoint, which is a URI(path) and a specific HTTP method (get, post, deletc).

Each route can have one or more handler functions, which are executed when the route is matched.

A basic route in express is defined by the following structure ;

app.METHOD(PATH, HANDLER);
- METHOD is an HTTP request method in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched.

app.get('/', (req, res) => {
	res.send('Hello World!');
}) // responds with Hello World! to a get request on the root route(/), the application's home page;

Working with path parameters.
We can access the path parameters passed on when making a request to the server.

the path parameters will be on the request object made by express js. 

example :

app.get('/user/:id', (req, res) => {
	res.send(`You requested user ${req.params.id}`);
});
// this defines a pattern on the path, when that pattern is matched by the request made, we console.log "You requested the user (id passed)"
