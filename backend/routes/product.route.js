import express from "express";
import Product from "../models/product.model.js";

const router = express.Router();

// create
router.post("/", async (req, res) => {
  console.log(req.body);

  // TODO: change this with uploading image
  const { name, price, image } = req.body;
  console.log(name, price, image);

  // validate
  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  // create product
  const product = new Product({
    name,
    price,
    image,
  });

  try {
    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.error(`Error saving product: ${error.message}`);
    res.status(500).json({ success: false, message: "Failed to save product" });
  }
});

// update
router.put("/:id", async (req, res) => {
  console.log(req.body);

  // validate
  const { name, price, image } = req.body;
  console.log(name, price, image);

  // validate
  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  // update product
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  try {
    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.error(`Error saving product: ${error.message}`);
    res.status(500).json({ success: false, message: "Failed to save product" });
  }
});

// index
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, data: products });
});

// show
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }
  res.status(200).json({ success: true, data: product });
});

// destroy
router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }
  res.status(200).json({ success: true, data: product });
});


export default router;

