import express from "express";
import connectDB from "./db/connect.js";
import products_routes from "./routes/products.js";
const app = express();

const PORT = 5000;



app.get("/", (req, res) => {
    res.send("Hi, I am live ");
});

app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
