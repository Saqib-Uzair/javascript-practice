const prompt = require('prompt-sync')();

console.log("WELCOME ---- ATM\n");

function verifyPin(){
    let pin = prompt("Enter your PIN: ");
    let check = true;
    while (check){
        if (pin !== "1234"){
        console.log("Invalid PIN:\n");
        pin = prompt("Enter your PIN again: ");
    }
    else{
        console.log("System Verify:\n");
        displayMenu();
        check = false;
        }
    }

}

verifyPin();
function displayMenu(){
    console.log("1. Balance Inquiry\n2. Cash Withdrawal\n3. Deposit\n4. Change PIN\n5. Exit\n");
}

function mainMenu(){
    let selection = prompt("Select:");
    let choice = true;

while (choice){
    
    switch(selection){

        case "1":
            console.log("Balance Inquiry\n");
            balanceInquiry();
            console.log("\n");
            displayMenu();
            selection = prompt("Continue Or Exit:");
            break;
        case "2":
            console.log("Cash Withdrawal\n");
            withdrawalAmount();
            console.log("\n");
            displayMenu();
            selection = prompt("Continue or Exit:");
            break;
        case "3":
            console.log("Deposit\n");
            depositAmount();
            console.log("\n");
            displayMenu();
            selection = prompt("Continue Or Exit:");
            break;
        case "4":
            console.log("Change PIN\n");
            changePIN();
            console.log("\n");
            displayMenu();
            selection = prompt("Continue Or Exit:");
            break;
        case "5":
            console.log("Exit\n");
            console.log("Thank you: Eject Card");
            choice = false;
            break;
        default:
            console.log("Inavalid - Operation\n");
            console.log("\n");
            displayMenu();
            selection = prompt("Continue Or Exit:");
        
            
            
    }

    
    }
}


let balance = 1000;

function balanceInquiry(){
    console.log(`Current Balance: ${balance}`);
}

function isValidNumber(input){
    const number = Number(input);
    return !isNaN(number) && isFinite(number);
}

function withdrawalAmount(){
    let amount = prompt("Enter withdrawal amount: ");
    let input_amount = parseInt(amount, 10);

    if(input_amount <= 0){
        console.log("Withdraw must be greater than 0:")
    }
    else if(input_amount > balance){
        console.log("Insufficient Balance:")
    }
    else if(isValidNumber(amount)){
        let input_amount = Number(amount);
        balance -= input_amount;
        console.log("Withdraw cash:", input_amount);
    }
    else{
        console.log("Invalid Withdraw!");
    }
}

function depositAmount(){
    let deposit = prompt("Enter the amount for deposit:");
    let input_deposit = parseInt(deposit, 10);
    
    if(input_deposit < 0){
        console.log("Error:Enter valid amount to deposit:")
    }
    else if (isValidNumber(deposit)){
        let input_deposit = Number(deposit);
        balance += input_deposit;
        console.log("Updated Balance:", balance);

    }
    else{
        console.log("Invalid Deposit!")
    }
}

function changePIN(){
   let update_PIN = prompt("Enter new PIN:");
   pin = update_PIN;
   console.log("Updated PIN:", pin);
}


mainMenu();

