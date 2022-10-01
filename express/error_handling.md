This will cover ways how express catches and processes errors that occur synchronously and asynchronously/

# Default Express Error Handler
Inside a synchronous route handler or middleware, if theres an error thrown, the default express error handler is able to catch and process the error.

- consider a synchronous route handler below :
	app.get('/', (req, res) => {
		const {fakeId} = doesn't exist;
	});
In the example above, the error that is thrown by the fakeId destructuring will be caught and processed by the default error handle in express and automatically be passed to the error handling middleware defined using app.use(). 

However this functionality isn't achievable with asyncronous route handlers or middleware. In route handlers that return a promise, (async handlers) the error must be caught and be passed down to next(), for express to catch it and process it using the error handling middleware defined.

Example: 
app.get('/', async(req, res, next) => { 
	try {
		const { fakeId } = fakeFetch(); // not defined
		res.send(fakeId);
	} 
	catch(err) {
		next(err); // Passes errors to Express
	}
})
In the example above, the try ... catch block will run and if the code inside the try throws any error, the try will catch it and pass it to express. And express will run the next error handling middleware in the stack.

### Defining an error handling middleware.
Error handlers can be defined by passing four arguments inside middleware funtion declarations. Example : 

app.use((err, req, res, next) => {
	// inside error handling middleware;
	console.log(err.status);
})

the syntax above is for an error handling middleware, by passing err, req, res and next to the middleware function inside app.use(), Express is able to interpret it as an error handler.

