import Product from "../models/product.model.js";

// index
export const indexProduct = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, data: products });
};

// store
export const storeProduct = async (req, res) => {
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
};

// update
export const updateProduct = async (req, res) => {
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
};

// show
export const showProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }
  res.status(200).json({ success: true, data: product });
};

// destroy
export const destroyProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }
  res.status(200).json({ success: true, data: product });
};
