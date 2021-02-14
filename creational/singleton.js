class Database {
    constructor(data) {
        if (Database.exists)
            return Database.instance

        Database.instance = this
        Database.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const mySql = new Database('MySql')

const postgres = new Database('postgres')

console.log(mySql.getData())
console.log(postgres.getData())
console.log(mySql === postgres) //true