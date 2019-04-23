const fs = require('fs');

function cat(cmd) {
  process.stdout.write("Cat module invoked\n");
  cmd = cmd.split(' ');
  // process.stdout.write(fs.readFile(cmd[1]));
  fs.readFile(cmd[1], (err, data) => {
    if (err) {
      process.stdout.write("An error has occured");
    }
    else {
      process.stdout.write(data);
      process.stdout.write("Input your data: ");
    }
  });

  process.stdout.write("Input your data: ");
}

module.exports = {
  cat,
}
