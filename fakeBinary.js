//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

//a string of numbers is given, check each number in the string and if number is below 5, return 0 for that position, if 5 and above, return 1 for that position.

//convert string to and array, 
//initialize an empty array, 
//loop through initial array and check if less than 5 or greater or equal to 5. 
//replace digit according and populate to the empty array


function fakeBinary(string){
    let newArr = []
    let strToArr = string.split('')

        for (let i = 0; i < strToArr.length; i++){
            if (strToArr[i] < 5 ){
                newArr.push(0)
            } else {
                newArr.push(1)
            }
            
        }
        return newArr.join("")
}

//function fakeBin(x) {
    //return x.split('').map(n => n < 5 ? 0 : 1).join('');
//}


console.log(fakeBinary("5454545454575757"))
 