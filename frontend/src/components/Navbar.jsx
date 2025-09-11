import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
  return (
    <Container maxW="container.xl">
      <Flex
        h={16}
        justify={"space-between"}
        align={"center"}
        flexDir={{
          Base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{
            Base: "2xl",
            sm: "3xl",
          }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
        >
          <Link to="/">Product Store</Link>
        </Text>

        <HStack spacing={4} alignItems={"center"}>
          <Link to={"/create"}>
            <Button colorScheme="blue">
              <CiSquarePlus />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
