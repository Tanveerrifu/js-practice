// var year = prompt("Enter year:");
// if (year % 4 == 0 && year % 100 != 0) {
//     console.log("Is Leap Year");

// } else if (year % 100 == 0) {
//     console.log("Is not a leap year");
// } else {
//     console.log("Is not leap year");
// }

function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log("The year is a leap year");
    } else if (year % 400 == 0) {
        console.log("The year is a leap year");
    } else {
        console.log("This year is not a leap year");
    }
    return year;
}
var yearIs = leapYear(2020);
console.log(yearIs);
yearIs = leapYear(2021);
console.log(yearIs);