import { useEffect } from "react";
import { useProductStore } from "../store/product";

const HomePage = () => {
    // const { products } = useProductStore();
    const { products, fetchProducts } = useProductStore();
    
    useEffect(() => {
        fetchProducts();
        console.log(products);
    }, []);
    
    console.log(products);
    
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage