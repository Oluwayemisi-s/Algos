// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string. 
// Examples
// potatoes(“potato”) ➞ 1
// potatoes(“potatopotato”) ➞ 2
// potatoes(“potatoapple”) ➞ 1
// Instructions:
// Rewrite the problem in your own words
// Write Your Own Test Cases
// Pseudocode
// Code
// Make It Clean and Readable
// Optimize

//find the number of the 'potato' string in a given string

//potatopotatopotatopotato -> 4

// check the given string to see how many substrings of potato exists

function noOfPotato(str){
    let strArr = str.split("potato")
    return strArr.length - 1
}

console.log(noOfPotato('potatopotato'), 'expecting => 2')
console.log(noOfPotato('potatopotato'))

console.log(noOfPotato('potatopotatopotatopotato'), 'expecting => 4')
console.log(noOfPotato('potatopotatopotatopotato'))

console.log(noOfPotato('potatopotatoapplepotatoappleapple'), 'expecting => 3')
console.log(noOfPotato('potatopotatoapplepotatoappleapple'))


Create a function which returns the number of true values there are in an array.
Examples
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0

Notes
* Return 0 if given an empty array.
* All array items are of the type bool (true or false).
