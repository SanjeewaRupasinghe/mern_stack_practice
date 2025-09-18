import { Box, Text } from "@chakra-ui/react";

export default function ProductCard({ product }) {
  return (
    <Box key={product._id} p={4} w={["100%", "50%", "33%", "25%"]}>
      <Box bg="white" borderRadius="md" boxShadow="md" p={4}>
        <Text fontSize="lg" fontWeight="bold" color="gray.800">
          {product.name}
        </Text>
        <Text color="gray.500">${product.price}</Text>
      </Box>
    </Box>
  );
}
