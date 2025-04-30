console.log('Express Tutorial')

const http = require("http");
const PORT = 3000;

//readFileSync is because it's invoked outside the server creation, and they're ready to be used: they won't get read with every coming request
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./index.html");
const aboutPage = readFileSync("./about.html");

const server = http.createServer((req, res) => {
    //do server stuff
    const url = req.url;
    console.log("User hit the server: ", req.url, " via ", req.method);
    if (url == "/") {
        //if home page
        res.writeHead(200, {"content-type": "text/html"})
        res.write(homePage);
        res.end();
    } else if (url == "/about") {
        //if about page
        res.writeHead(200, {"content-type": "text/html"})
        res.write(aboutPage);
        res.end();
    } else {
        //if not found
        res.writeHead(404, {"content-type": "text/html"})
        res.write("<code style='font-weight: bold; color: #f00'>404, resource not found: go back <a href='/'>home</a></code>");
        res.end();
    };
});

server.listen(PORT, console.log(`Listening on port ${PORT}`));