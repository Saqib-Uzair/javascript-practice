// array minimum value;

const number = [2,4,1,6,8];
let min = number[0];

for (let i = 0; i < number.length; i++){
    if (min > number[i]){
        min = number[i];
    }
}
console.log(min);