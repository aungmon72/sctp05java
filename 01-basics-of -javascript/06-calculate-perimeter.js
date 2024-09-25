const prompt = require("prompt-sync")();

let length =  prompt ("Enter Length                 : ",'LL');
let width  =  prompt ("Enter Width                  : ",'WW');
let perimeter = ( parseFloat(length) + parseFloat (width) ) * 2;
console.log          ("Perimeter of a Rectangle is  : ",perimeter,"from", length, 'and width', width);