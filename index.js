var moment = require('moment');
var math = require('mathjs');

var message = "Hello from JavaScript!"
console.log(message);

var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(datetime);

console.log(math.sqrt(-4));