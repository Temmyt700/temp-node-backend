

// latest import ES module method is used below to import the path module
/*
import { sep, join, basename, resolve } from 'path';
console.log(sep);


const filePath = join('/content', 'subfolder', 'test.txt');
console.log(filePath);


const base = basename(filePath);
console.log(base);


const absolute = resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
*/


//require method is used below to import the path module

const path = require('path');
console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);


const base = path.basename(filePath);
console.log(base);

//__dirname is a global variable that is available in all files
//__dirname is the path to the current directory
// that is why it is used to get the absolute path of the file in the code below

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

