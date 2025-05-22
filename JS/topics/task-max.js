// array maximum value

const numbers = [1,2,6,3,4];
let max = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if (max < numbers[i]){
        max = numbers[i];
    }
    
}
console.log(max);