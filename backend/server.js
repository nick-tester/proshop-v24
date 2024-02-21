import express from "express";
const PORT = 4000;


const server = express();

server.get("/", (req, res) => {
    res.send("Root endpoint running...");
});


server.listen(PORT, () => console.log(`Server is running in development mode on port ${PORT}...`));