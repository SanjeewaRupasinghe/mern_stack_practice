import { Button, Container, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleSubmit = async (e) => {
    console.log(product);

    e.preventDefault();

    const { status, message } = await createProduct(product);
    console.log(status, message);

    if (status) {
      console.log("Product created successfully");

      // Toast({
      //   title: "Product created successfully",
      //   status: "success",
      //   duration: 3000,
      //   isClosable: true,
      // });
      setProduct({
        name: "",
        price: "",
        image: "",
      });
    } else {
      console.log("Product created failed");
      // Toast({
      //   title: "Product created failed",
      //   status: "error",
      //   duration: 3000,
      //   isClosable: true,
      // });
    }
  };

  return (
    <Container>
      <Container maxW="container.md" bg={"gray.900"} p={6} borderRadius={6}>
        <VStack>
          <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"}>
            Create Product
          </Text>
          <Input
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            value={product.name}
            placeholder="Product Name"
          />
          <Input
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            value={product.price}
            placeholder="Product Price"
          />
          <Input
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            value={product.image}
            placeholder="Product Image"
          />
          <Button onClick={handleSubmit} colorScheme={"blue"} w={"full"}>
            Create
          </Button>
        </VStack>
      </Container>
    </Container>
  );
};

export default CreatePage;
