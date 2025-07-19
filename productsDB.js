// import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import Product from './models/product.js';
import ProductJson from './products.json' assert { type: 'json' };

// dotenv.config();
const url = "mongodb+srv://asmianjum26:Tnu85FleB4CZRu6A@asmiapi.hu6lo5q.mongodb.net/?retryWrites=true&w=majority&appName=AsmiAPI";

const start = async () => {
  try {
    await connectDB(url);
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
