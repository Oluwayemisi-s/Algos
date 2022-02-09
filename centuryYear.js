
// INSTRUCTIONS (8 kyu)

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//Write a program that will return the century a given year is

//Divide a given number by 100, check if it has a remianinder, if yes, add 1 to the number that the divided result gives. If not, return the divvided result.

let result

function centuryCounter(year){
    result = year/100

    if (year % 100 == 0){
        return (result)
    } else {
        return Math.ceil(result)
        //return result
    }

}

// console.log (centuryCounter(1705))
// console.log (centuryCounter(1900))
// console.log (centuryCounter(1601))
//console.log(result)
console.log (centuryCounter(540625))