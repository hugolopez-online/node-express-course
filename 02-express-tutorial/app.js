const express = require("express");
const app = express();
const PORT = 3000;
let { people } = require("./data");

//static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

app.post("/login", (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    };
    return res.status(401).send("Please provide credentials");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
});