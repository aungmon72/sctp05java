// Write a program to ask the user for an integer variable X, and then displays only the even numbers from 0 to X, starting with 0.
const prompt = require ("prompt-sync")();
console.log("Enter an integer and print only even integer from 0 to that integer  : ")
let x = null;
while (1) {
    x = parseInt(prompt("Enter an Integer "));
    if (x != null) break;
}
console.log ("You have entered : ",x)
let y = 0
while (y != x) {
    if (x>= 0) {
        console.log("Even Integer : ", y)
        y = y + 2
    }
    else {
        console.log("Even Integer : ", y)
        y = y - 2
    }
    if ((x>=0) && (y>x)) { break }
    else if ((x<0) && (y<x)) { break}
    
}
if ((x % 2) == 0) {console.log("Even Integer : ", y)
}
// test case -10,9, 0, 9, 10
// test case excludes STRINGs
