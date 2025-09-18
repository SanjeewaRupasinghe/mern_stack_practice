import { Box, Button, Text } from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { CiTrash } from "react-icons/ci";

export default function ProductCard({ product }) {
  const { deleteProduct } = useProductStore();

  return (
    <Box key={product._id} p={4} w={["100%", "50%", "33%", "25%"]}>
      <Box bg="white" borderRadius="md" boxShadow="md" p={4}>
        <Text fontSize="lg" fontWeight="bold" color="gray.800">
          {product.name}
        </Text>
        <Text color="gray.500">${product.price}</Text>
        <Button
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this product?")
            ) {
              deleteProduct(product._id);
            }
          }}
        >
          <CiTrash color="red" />
        </Button>
      </Box>
    </Box>
  );
}
