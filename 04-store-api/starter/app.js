require("dotenv").config();
require("express-async-errors");
// async errors

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.status(200).send(
        "<h1>Store API</h1><a href='/api/v1/products'>products route</a>"
    );
});

app.use("/api/v1/products", productsRouter);

// products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        //conect DB
        await connectDB(process.env.MONGO_URI);
        app.listen(
            PORT,
            console.log(`Server ready and listening on port ${PORT}...`)
        );
    } catch (error) {}
};

start();
