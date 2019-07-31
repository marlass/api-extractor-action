const diff = require('git-diff');
const fs = require('fs');

console.log(
  diff(
    fs.readFileSync(__dirname + '/raport1.md', 'utf-8'),
    fs.readFileSync(__dirname + '/raport2.md', 'utf-8')
  )
);
