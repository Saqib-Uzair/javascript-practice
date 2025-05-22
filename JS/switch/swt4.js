// calculator using switch

let arithmetic = "+";
let a = 5;
let b = 4;

switch (arithmetic){
    case "+":
        console.log(`Addition: ${a+b}`);
        break;
    case "-":
        console.log(`Subtraction: ${a-b}`);
        break;
    case "x":
        console.log(`Multiplication: ${a*b}`);
        break;
    case "/":
        console.log(`Division: ${a/b}`);
        break;
    default:
        console.log("Invalid Opeartion");
}