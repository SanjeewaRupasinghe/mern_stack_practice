import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import ProductRoute from "./routes/product.route.js";

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Allow only your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// accept json data from request
app.use(express.json());

app.use("/api/products", ProductRoute);

app.listen(5000, () => {
  connectDB();
  console.log("Server running on port 5000");
});
