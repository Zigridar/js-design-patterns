class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to)
            to.receive(message, from)
        else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from)
                    this.users[key].receive(message, from)
            })
        }
    }
}

const vlad = new User('Vlad')
const max = new User('Max')
const den = new User('Deni')

const room = new ChatRoom()

room.register(vlad)
room.register(max)
room.register(den)

vlad.send('Hello', max)
max.send('Hello, hello', vlad)
den.send('Hello, hello')