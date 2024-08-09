var conuntDownDate = new Date('Jan 1, 2024') 

setInterval("runClock()", 1000)

function runClock() {
    // console.log('abc')

    var now = new Date()

var timeDistance = conuntDownDate - now

var days = Math.floor (timeDistance/1000/60/60/24)
// console.log(days)
var hours = Math.floor (timeDistance % (1000 * 60 * 60 * 24)) / 1000/60/60
var minutes = Math.floor (timeDistance % (1000 * 60 * 60 * 24)) / 1000/60/60
var seconds =  Math.floor (timeDistance % (1000 * 60 * 60 * 24)) / 1000/60/60
console.log('days:',days)
console.log('hours:',hours)
console.log('minutes:',minutes)
console.log('seconds:',seconds)

document.getElementById('days').innerHTML = days;
document.getElementById('hrs').innerHTML = hrs;
document.getElementById('mins').innerHTML = mins;
document.getElementById('secs').innerHTML = secs;

// if (timeDistance<0) {
//     document.getElementById('countdown').innerHTML = "Expired"
// }
    // console.log(now-conuntDownDate)
}