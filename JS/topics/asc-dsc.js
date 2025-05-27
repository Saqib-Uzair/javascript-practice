const prompt = require('prompt-sync')();
const myArray = [5,2,1,4,3];

console.log(myArray);

function ascending(){
    for (let a = 0; a < myArray.length; a ++){

        for (let b = a + 1; b < myArray.length; b ++){

            if(myArray[a] > myArray[b]){
                let c = myArray[a];
                myArray[a] = myArray[b];
                myArray[b] = c;
            }
        }
    }
    console.log("Ascending Order:", myArray);
}
function descending(){
    for (let a = 0; a < myArray.length; a ++){

        for (let b = a + 1; b < myArray.length; b ++){

            if (myArray[a] < myArray[b]){
                let c = myArray[a];
                myArray[a] = myArray[b];
                myArray[b] = c
            }
        }
    }
    console.log("Descending Order:",myArray);
}
console.log("1 for Ascending Array\n2 for Descending Array");
let asking = prompt("Choose:");

switch (asking){
    case "1":
        ascending();
        break;
    case "2":
        descending();
        break;
    default:
        console.log("Invalid Number");
}