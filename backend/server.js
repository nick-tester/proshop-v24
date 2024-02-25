import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
import connectDB from "./config/db.js";

connectDB();

const server = express();

server.use(express.json());

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


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`));