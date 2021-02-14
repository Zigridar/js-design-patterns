class MySum {
    constructor(initValue = 42) {
        this.sum = initValue
    }

    add(value) {
        this.sum += value
        return this
    }
}

const sum1 = new MySum()
console.log(sum1.add(8).add(5).add(12).add(56))

const sum2 = new MySum(0)

console.log(sum2.add(1).add(52))