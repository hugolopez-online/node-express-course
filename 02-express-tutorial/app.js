const express = require ("express");
const path = require("path")
const app = express();
const PORT = 3000;

//setup static and middleware
app.use(express.static("./public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
    res.status(404).send("Resource not found")
});

app.listen(PORT, () => {
    console.log(`Server listening port ${PORT}`);
    
});