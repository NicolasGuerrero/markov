/** Command-line tool to generate Markov text. */
const markov = require("./markov.js");
const fs = require('fs');
const path = './eggs.txt';

fs.readFile(path, 'utf8', function (err, data) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  else {
    let mm = new markov.MarkovMachine(data);
    console.log(mm.makeText());
  }
})
