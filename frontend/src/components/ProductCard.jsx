import {
  Box,
  Button,
  Container,
  Text,
  Dialog,
  Portal,
  CloseButton,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { CiTrash, CiEdit } from "react-icons/ci";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { deleteProduct, updateProduct } = useProductStore();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [updateProductDetails, setUpdateProductDetails] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });

  const handleSubmit = async (e) => {
    console.log(updateProductDetails);

    e.preventDefault();

    const { status, message } = await updateProduct(
      product._id,
      updateProductDetails
    );
    console.log(status, message);

    if (status) {
      console.log("Product updated successfully");
      // TODO: add toast
      // Toast({
      //   title: "Product updated successfully",
      //   status: "success",
      //   duration: 3000,
      //   isClosable: true,
      // });

      product.name = updateProductDetails.name;
      product.price = updateProductDetails.price;
      product.image = updateProductDetails.image;

      setUpdateProductDetails({
        name: "",
        price: "",
        image: "",
      });
    } else {
      console.log("Product updated failed");
      // TODO: add toast
      // Toast({
      //   title: "Product updated failed",
      //   status: "error",
      //   duration: 3000,
      //   isClosable: true,
      // });
    }

    setIsDialogOpen(false);
  };

  return (
    <Box key={product._id} p={4} w={["100%", "50%", "33%", "25%"]}>
      <Box bg="white" borderRadius="md" boxShadow="md" p={4}>
        <Text fontSize="lg" fontWeight="bold" color="gray.800">
          {product.name}
        </Text>
        <Text color="gray.500">${product.price}</Text>

        <Container display="flex" justifyContent="end" alignItems="end">
          <Dialog.Root motionPreset="slide-in-bottom">
            <Dialog.Trigger asChild>
              <Button>
                {" "}
                <CiEdit />
              </Button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Edit Product {product.name}</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <VStack>
                      <Text
                        fontSize={"2xl"}
                        fontWeight={"bold"}
                        textAlign={"center"}
                      >
                        Create Product
                      </Text>
                      <Input
                        onChange={(e) =>
                          setUpdateProductDetails({
                            ...updateProductDetails,
                            name: e.target.value,
                          })
                        }
                        value={updateProductDetails.name}
                        placeholder="Product Name"
                      />
                      <Input
                        onChange={(e) =>
                          setUpdateProductDetails({
                            ...updateProductDetails,
                            price: e.target.value,
                          })
                        }
                        value={updateProductDetails.price}
                        placeholder="Product Price"
                      />
                      <Input
                        onChange={(e) =>
                          setUpdateProductDetails({
                            ...updateProductDetails,
                            image: e.target.value,
                          })
                        }
                        value={updateProductDetails.image}
                        placeholder="Product Image"
                      />
                    </VStack>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button onClick={handleSubmit} colorScheme={"blue"}>
                      Update
                    </Button>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>

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
        </Container>
      </Box>
    </Box>
  );
}
