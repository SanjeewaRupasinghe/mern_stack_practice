import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  // create a function to add a product
  createProduct: async (product) => {

    return {
        status: false,
        message: "Please fill all the fields",
      };
      
    if (!product.name || !product.price || !product.image) {
      console.log("Please fill all the fields");
      return {
        status: false,
        message: "Please fill all the fields",
      };
    }

    const response = await axios.post(
      "http://localhost:5000/products",
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
}));
