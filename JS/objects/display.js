// using objec.entries()

const fruits = {Banana: 300, Orange: 200, Apples:500};

let text = "";

for (let [fruit, value] of Object.entries(fruits)){
    text += fruit + ": " + value + "<br>";
}