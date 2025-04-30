console.log('Express Tutorial')

const http = require("http");
const PORT = 3000;

//readFileSync is because it's invoked outside the server creation, and they're ready to be used: they won't be read with every coming request
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
const homeIcon = readFileSync("./navbar-app/logo.svg");
const homeStyles = readFileSync("./navbar-app/styles.css");

const server = http.createServer((req, res) => {
    //do server stuff
    const url = req.url;
    console.log("User hit the server: ", req.url, " via ", req.method);
    if (url == "/") {
        //if home page
        res.writeHead(200, {"content-type": "text/html"})
        res.write(homePage);
        res.end();
    } else if (url == "/styles.css") {
        //styles
        res.writeHead(200, {"content-type": "text/css"})
        res.write(homeStyles);
        res.end();
    } else if (url == "/logo.svg") {
        //styles
        res.writeHead(200, {"content-type": "image/svg+xml"})
        res.write(homeIcon);
        res.end();
    } else if (url == "/browser-app.js") {
        //styles
        res.writeHead(200, {"content-type": "text/javascript"})
        res.write(homeLogic);
        res.end();
    } else {
        //if not found
        res.writeHead(404, {"content-type": "text/html"})
        res.write("<code style='font-weight: bold; color: #f00'>404, resource not found: go back <a href='/'>home</a></code>");
        res.end();
    };
});

server.listen(PORT, console.log(`Listening on port ${PORT}`));