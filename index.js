import moment from 'moment';
var math = require('mathjs');

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(datetime);

console.log(math.sqrt(-4));