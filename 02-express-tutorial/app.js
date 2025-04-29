console.log('Express Tutorial')

const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    //do server stuff
    const url = req.url;
    console.log("User hit the server: ", req.url, " via ", req.method);
    if (url == "/") {
        //if home page
        res.writeHead(200, {"content-type": "text/html"})
        res.write("<h1>Home Page</h1><p>Go to <a href='/about'>about page</a></p><p>Go to <a href='/qwertyuiop'>non-existing page</a></p>");
        res.end();
    } else if (url == "/about") {
        //if about page
        res.writeHead(200, {"content-type": "text/html"})
        res.write("<h1>About This Website</h1><p>Go back to <a href='/'>home</a></p><p>Go to <a href='/qwertyuiop'>non-existing page</a></p>");
        res.end();
    } else {
        //if not found
        res.writeHead(404, {"content-type": "text/html"})
        res.write("<code style='font-weight: bold; color: #f00'>404, resource not found: go back <a href='/'>home</a></code>");
        res.end();
    };
});

server.listen(PORT, console.log(`Listening on port ${PORT}`));