const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'sunday'];
let today = 'Monday';
let indexOfToday = weekDay.indexOf(today)
console.log(indexOfToday);
let result;

function getEventWeekday(whatDay) {
    result = (whatDay + indexOfToday) % 7
    console.log(result)
    console.log(weekDay[result % 7])
}
getEventWeekday(20)