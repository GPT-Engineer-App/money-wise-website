import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Financial Times
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Home
          </Link>
          <Link as={NavLink} to="/world" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            World
          </Link>
          <Link as={NavLink} to="/business" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Business
          </Link>
          <Link as={NavLink} to="/opinion" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Opinion
          </Link>
          <Link as={NavLink} to="/tech" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Tech
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;