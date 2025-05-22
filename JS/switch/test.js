let balance = 1000;
let withdraw_amount = 500;

function withdrawl(){
    if (withdraw_amount > balance){
        console.log("Deny the transaction")
    }
    else{
        balance -= withdraw_amount;
    }
    console.log(balance);
}

withdrawl();


// input in javascript practice example

// const prompt = require('prompt-sync')();

// const input = prompt("Enter your name:");
// console.log("You entered your name:" + input);