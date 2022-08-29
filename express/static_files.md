Images, css files and javascript files can be served as static files in express using the express.static built-in middleware function.

express.static(root, [options]);

- the root argument specifies the root directory from which to serve static assets. 
- the following code serves images, css files and javascript files in a directory named public. 

app.use(express.static('public'));

loading the files with the structure below:

http:localhost:3000/images/kitten.jpg
http:localhost:3000/css/style.css

to use multiple assets directories, call the express.static middleware function multiple times.

- to make an absolute path of the static assets directory, we can use the following code; 
app.use(express.static(path.join(__dirname, 'assets')));

we set the static folder to whichever directory holds the index.js file.
