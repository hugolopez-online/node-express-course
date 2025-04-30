const express = require("express");
const { products } = require("./data")
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    });
    res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
    // console.log(req);
    // console.log(req.params);
    
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));
    if (!singleProduct) {
        //if doesn't exist
        return res.status(404).send("Product does not exist")
    }
    res.json(singleProduct);
});

app.get("/api/products/:productID/review/:reviewID", (req, res) => {
    res.send("Hello world");
    
});

app.get("/api/v1/search", (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    };

    if (limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit))
    };

    if (sortedProducts.length < 1) {
        return res.status(200).send("No products available")
    };
    return res.status(200).json(sortedProducts);    
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
});