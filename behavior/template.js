class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} has salary: ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'create apps'
    }
}


class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'create tests'
    }
}

const dev = new Developer('Max', 60000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Deni', 30000)
console.log(tester.getPaid())
console.log(tester.work())