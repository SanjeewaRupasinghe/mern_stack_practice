import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  // create a function to add a product
  createProduct: async (product) => {

    if (!product.name || !product.price || !product.image) {
      console.log("Please fill all the fields");
      return {
        status: false,
        message: "Please fill all the fields",
      };
    }

    if(isNaN(product.price)) {
      console.log("Price must be a number");
      return {
        status: false,
        message: "Price must be a number",
      };
    }

    const response = await axios.post(
      "http://localhost:5000/api/products",
      product,
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    console.log(response);
    const data = response.data;
    console.log(data);
    set((state) => ({
      products: [...state.products, data],
    }));

    return {
      status: true,
      message: "Product created successfully",
    };
  },

  // fetch all products
  fetchProducts: async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    const data = response.data.data;
    set((state) => ({
      products: data,
    }));
  },
}));
