fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

this asynchronously appends data to a file, creating the file if it does not yet exist. Data can be a string or a buffer.
