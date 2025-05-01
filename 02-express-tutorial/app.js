const express = require("express");
const logger = require("./logger");
const app = express();
const PORT = 3000;

//use() will apply the middleware func to every request handler after it
//and if a first argument with a path is passed, it'll apply it only to those matching that path
app.use("/api", logger)

app.get("/", (req, res) => {
    res.send("Home")
});

app.get("/about", (req, res) => {
    res.send("About")
});

app.get("/api/products", (req, res) => {
    res.send("Products")
});

app.get("/api/items", (req, res) => {
    res.send("Items")
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
});