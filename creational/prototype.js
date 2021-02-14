const car = {
    wheels: 4,
    init() {
        console.log(`Wheels: ${this.wheels}, Owner: ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Max'
    }
})

console.log(carWithOwner.__proto__ === car) //true

carWithOwner.init()