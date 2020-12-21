/*
    Name: santatracker
    Author: hasanoes
    Version: 1.0
*/

var now = new Date();

var currentMonth = (now.getMonth() + 1);

var currentDay = now.getDate();

var nextChristmasYear = now.getFullYear();
if (currentMonth == 12 && currentDay > 25) {
    nextChristmasYear = nextChristmasYear + 1;
}

var nextChristmasDate = nextChristmasYear + '-12-24T00:00:00.000Z';
var christmasDay = new Date(nextChristmasDate);

var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);

var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;

if (currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
    days = Math.floor(diffSeconds / (3600 * 24));
    diffSeconds -= days * 3600 * 24;
    hours = Math.floor(diffSeconds / 3600);
    diffSeconds -= hours * 3600;
    minutes = Math.floor(diffSeconds / 60);
    diffSeconds -= minutes * 60;
    seconds = diffSeconds;
}


module.exports = {
    days,
    hours,
    minutes,
    seconds
}