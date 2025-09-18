import { useEffect } from "react";
import { useProductStore } from "../store/product";
import { Container, Flex, Link, Text } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  // const { products } = useProductStore();
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  console.log(products);

  return (
    <Container>
      <h1>Products</h1>

      {products.length === 0 ? (
        <Container
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Text>No products found</Text>
          <Link
            to="/create"
            display="block"
            textAlign="center"
            color="blue.500"
            fontWeight="bold"
            textDecoration="underline"
          >
            Create a product
          </Link>
        </Container>
      ) : (
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Flex>
      )}
    </Container>
  );
};

export default HomePage;
