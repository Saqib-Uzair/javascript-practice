// public access modifier

class Car {
    constructor(brand){
        this.brand = brand
    }
    start() {
        console.log(`${this.brand} is starting`);
    }
}

const car = new Car('BMW');
car.start();