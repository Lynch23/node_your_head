The req object represents the http request and has properties for the request query string, parameters, body, http headers etc. 

app.get('/', (req, res) => {
	res.send('Welcome to homepage')
}) // in this example, we run app.get which responds with "Welcome to homepage"  when the path requested matches the one passed to app.get.

The res object represents the http response that an Express app send when it gets an http request.

app.get('/user/:id', (req, res) => {
	res.send(`user ${req.params.id}`);
});
// this will respond with what ever user id that is passed matching the pattern "/user/:id" passed inside app.get.

res.render(view, [locals], [callback]) - renders a view and sends the rendered HTML string to the client. 

- locals - an object whose properties define local variables for the view.
- callback - a callback function. If provided, the method returns both the possible error and rendered string.
