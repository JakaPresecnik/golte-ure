var Holidays = require('date-holidays');
var hd = new Holidays();
hd.init('SI')
let prazniki = hd.getHolidays(2020)
    .filter((praznik) => praznik.type === 'public')
    .map((praznik) => new Date(praznik.date).toDateString());

console.log(prazniki);