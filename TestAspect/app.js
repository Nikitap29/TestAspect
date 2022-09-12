'use strict';

var readline = require('readline-sync');
var row = readline.question("Request:");
var table = readline.question("Table:");
var func = require('./func');
(async () => {
    let res = await func.select(table, row);
    console.log(res[0]);
    console.log(res[1]);
    readline.question("Press Enter");
})();




