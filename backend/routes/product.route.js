import express from "express";
import {
  storeProduct,
  updateProduct,
  indexProduct,
  showProduct,
  destroyProduct,
} from "../controllers/product.contoller.js";

const router = express.Router();

// store
router.post("/", storeProduct);

// update
router.put("/:id", updateProduct);

// index
router.get("/", indexProduct);

// show
router.get("/:id", showProduct);

// destroy
router.delete("/:id", destroyProduct);

export default router;
