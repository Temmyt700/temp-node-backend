//this code is same as the destructured import code below
// const fs = require('fs');
// fs.readFileSync('./content/first.txt', 'utf8');


//this is the destructured import code
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});
//this will append the data to the file result-sync.txt