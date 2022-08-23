fs.unlink('path', callback) - Asynchronoudly removes a file or symbolic link. No arguments other than a possible exception are given to the completion callback.

accepts a callback function as the second parameter and once the task if completed, passes any errors if any to the callback function.

fs.unlink('path/file.txt', (err) => {
  if (err) throw err;
  console.log('path/file.txt was deleted');
});
