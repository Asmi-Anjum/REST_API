import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
  const myData = await Product.find({});
  res.status(200).json({ myData });
};

export const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am getAllProductsTesting" });
};

export const getAllAppleProducts = async(req,res)=>{
    const myData = await Product.find({ company: "apple" });
    res.status(200).json({myData});
}

export const getAllnameProducts = async(req,res)=>{
    const myData = await Product.find({ name : "watch" });
    res.status(200).json({myData});
}