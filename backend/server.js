import express from "express";
import { connectDB } from "./config/db.js";
import ProductRoute from "./routes/product.route.js";

const app = express();

// accept json data from request
app.use(express.json());

app.use("/api/products", ProductRoute);

app.listen(5000, () => {
  connectDB();
  console.log("Server running on port 5000");
});
