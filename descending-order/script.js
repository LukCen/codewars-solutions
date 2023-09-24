'use strict'
function descendingOrder(n){
    let arrayfied = n.toString().split("").sort((a,b) => b-a).join("")
    return parseInt(arrayfied)
}

/**
* 1) Turn the number into a string with toString()
* 2) Separate the string into individual characters using split(), passing an empty string as an argument
* 3) Use the sort() function, passing this algorithm to sort the elements in descending order
* 4) Finally, combine the elements into a single string again using join(), passing empty string as an argument
* 5) Because the result is a string, and the site requests a number as a result, we pass the arrayfied variable into parseInt() and then return that
*/

console.log(descendingOrder(123456789))