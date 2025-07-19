import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
  const myData = await Product.find({});
  console.log(myData);
  res.status(200).json({ myData });
};

export const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am getAllProductsTesting" });
};

export const getAllAppleProducts = async(req,res)=>{
    // const myData = await Product.findOne({ company: "apple" })
    // console.log(myData);
    // res.status(200).json({myData});
      res.status(200).json({ msg: "I am getAllProductsTesting" });

}