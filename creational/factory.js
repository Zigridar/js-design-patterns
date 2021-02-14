class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {

    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple
        const memberShip = new MemberShip(name)
        memberShip.type = type
        memberShip.define = function () {
            console.log(`${this.name} ${this.cost} ${this.type}`)
        }
        return memberShip
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Max', 'simple'),
    factory.create('Deny', 'standard'),
    factory.create('Niky', 'premium')
]

console.log(members)