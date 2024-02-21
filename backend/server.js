import express from "express";
import products from "./data/products.js";
const PORT = 4000;


const server = express();

server.get("/", (req, res) => {
    res.send("Root endpoint running...");
});

server.get("/api/v24/products", (req, res) => {
    res.json(products);
});

server.get("/api/v24/products/:id", (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});


server.listen(PORT, () => console.log(`Server is running in development mode on port ${PORT}...`));