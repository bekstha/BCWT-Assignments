'use strict';

// use const or let
// never use 'var'
const _ = require('lodash');

//Exercise  1
console.log("This is JavaScript!!");

//Exercise 2
let output = 'Just testing nodemon, using lodash to convert' +
                ' this is camel case';

console.log(output);

output = _.camelCase(output);
console.log(output);