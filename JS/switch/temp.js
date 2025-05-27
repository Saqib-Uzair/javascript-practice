// Temperature conversion

const prompt = require('prompt-sync')();

console.log("Type:\n1. to convert fahrenheit to celsius:\n2. to convert celsius to fahrenheit:")



let input_temp = prompt("Enter Temperature:");
let temp = Number(input_temp);
let type = prompt("Select:");

switch (type){

    case "1":
        fahrenheit_celsius();
        break;
    case "2":
        celsius_fahrenheit();
        break;
    default:
        console.log("Invalid Output:");
}

function celsius_fahrenheit(){
    let F;
    F = temp * 9/5 + 32;
    console.log(`Celsius to Fahrenheit:${F}`);
}

function fahrenheit_celsius(){
    let C;
    C = (temp - 32) * 5/9;
    console.log(`Fahrenheit to Celsius:${C}`);
}