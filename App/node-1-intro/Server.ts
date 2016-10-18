var http = require("http");

class Server {
    constructor() {
        http.createServer((req, res) => {
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end(`Hello World\n`);
        }).listen(1337);
        console.log(`Server running`);
    }
}

export default Server;