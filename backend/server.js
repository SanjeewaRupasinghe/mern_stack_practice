import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.post("/api/products", async (req, res) => {

  console.log(req.body);
  
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const product = new Product({
    name,
    price,
    image,
  });

  try {
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(`Error saving product: ${error.message}`);
    res.status(500).json({ success: false, message: "Failed to save product" });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("Server running on port 5000");
});
