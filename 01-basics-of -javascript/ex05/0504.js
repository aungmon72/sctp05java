// Write a program to ask the user for an integer variable X, and then displays the number from 1 to X, each on its own line.

const prompt = require ("prompt-sync")();
console.log("Enter an integer and print from 1 to that integer  : ")
let x = null;
while (1) {
    x = parseInt(prompt("Enter an Integer "));
    if (x != null) break;
}
console.log ("You have entered : ",x)
let y = 1
while (y != x) {
    if (x> 1) {
        console.log(y++)
    }
    else {
        console.log(y--)
    }
    
}
console.log(y)
// test case -5, 1, 5
