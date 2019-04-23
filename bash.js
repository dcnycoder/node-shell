const pwdModule = require('./pwd');
const lsModule = require('./ls');
const catModule = require('./cat.js');
const fs = require('fs');

process.stdout.write("\nInput your data: ");

process.stdin.on('data' , (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwdModule.pwd();
  }
  else if (cmd === 'ls') {
    lsModule.ls();
  }
  else if (cmd.includes('cat')) {
    catModule.cat(cmd);
  }
  else {
    process.stdout.write(`You typed: ${cmd}`);
    process.stdout.write("Input your data: ");
  }

});
