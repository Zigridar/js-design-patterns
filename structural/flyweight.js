class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    getCar(model) {
        return this.cars.find(car => car.model === model)
    }

    create(model, price) {
        const candidate = this.getCar(model)

        if (candidate)
            return candidate

        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }
}

const factory = new CarFactory()

const bmwX4 = factory.create('bmw', 10000)
const audi = factory.create('audi', 12000)
const bmwX3 = factory.create('bmw', 8000)

console.log(bmwX4, bmwX3, audi)

console.log(bmwX3 === bmwX4)