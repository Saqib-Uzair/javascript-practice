// practice set 1 

class Person {
    name = "Saqib";
    age = 35;
    #ssn = "ABCD1234";

    introduce() {
        console.log(`Name:${this.name} Age:${this.age}`);
    }

    getSSN() {
        return this.#ssn;
    }
}

const p = new Person();
console.log(p.introduce());