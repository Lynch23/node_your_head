The process object provides information about, and control over, the current Node.js process.

on this process object, we have a property, process.argv which returns an array containing command-line arguments passed when the Node.js process was launched. The first element will be the path to the node executable file on the computer, the second elememnt will be the path to the js file being executed. the remaining elements will be any additional command-line arguments.

example // we can run this code in a js file
console.log(process.argv.slice(2))

// in node we can run
node example.js Hello World

then on our console we would have ['Hello', 'World']
