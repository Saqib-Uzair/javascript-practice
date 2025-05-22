// sorting array

const numbers = [5,30,2,1,4];
console.log(numbers);

for (let a=0; a < numbers.length;a++){
    for (let b = a+1; b < numbers.length; b++){
        if (numbers[a] > numbers[b] ){
            let c = numbers[a];
            numbers[a] = numbers[b];
            numbers[b] = c;
            console.log("a", numbers[a]);
        }
    }

}

console.log(numbers);