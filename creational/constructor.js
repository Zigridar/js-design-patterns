class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const aws = new Server('AWS', '192.168.0.123')

console.log(aws.getUrl())