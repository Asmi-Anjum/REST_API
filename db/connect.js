import mongoose from "mongoose";

const url = "mongodb+srv://asmianjum26:Tnu85FleB4CZRu6A@asmiapi.hu6lo5q.mongodb.net/?retryWrites=true&w=majority&appName=AsmiAPI";

const connectDB = () => {
    console.log("connect db")
  return mongoose.connect(url, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
  });
};

export default connectDB;
