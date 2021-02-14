class Server {
    constructor(ip, port) {
        this._ip = ip
        this._port = port
    }

    get url() {
        return `https://${this._ip}:${this._port}`
    }
}

function aws(server) {
    server.isAWS = true
    server.awsInfo = function () {
        return server.url
    }

    return server
}

function azure(server) {
    server.isAzure = true
    server._port += 500
    return server
}

const server_1 = new Server('12.34.56.78', 8080)
const server_2 = new Server('12.34.56.78', 8080)

const awsServer = aws(server_1)
const azureServer = azure(server_2)

console.log(awsServer.isAWS)
console.log(awsServer.awsInfo())

console.log(azureServer.isAzure)
console.log(azureServer.url)
