function pwd() {
  process.stdout.write(process.cwd().toString().trim());
  process.stdout.write("\nAnything else you want done, Master? ");
};

function nothing() {
  process.stdout.write('\nFunction nothing invoked');
}

module.exports = {
  pwd: pwd,
  nothing: nothing,
}
