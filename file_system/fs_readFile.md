fs.readFile('file-path','encoding', 'callback') :


fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});

Asyncronously reads the entire contents of a file.
Data read is then passed over to the callback function as the second argument.
