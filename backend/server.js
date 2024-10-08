import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorHandlers.js";


connectDB();

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use(cookieParser());

server.get("/", (req, res) => {
    res.send("Root endpoint running...");
});

server.use("/api/v24/products", productRoutes);

server.use("/api/v24/users", userRoutes);

server.use(notFound);

server.use(errorHandler);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`));