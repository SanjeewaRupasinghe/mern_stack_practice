import mongoose from "mongoose";
// import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    // dotenv.config();
    const conn = await mongoose.connect("mongodb+srv://sanjeewaar20_db_user:sanjeewaar20_db_user@cluster0.jtrvtak.mongodb.net/products/?retryWrites=true&w=majority&appName=Cluster0", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
    
  }
};
