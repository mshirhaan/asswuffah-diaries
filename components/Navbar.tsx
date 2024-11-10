// components/Navbar.tsx

import { Box, Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  const logoColor = "brand.600";

  return (
    <Box as="nav" bg="neutral.50" py={4} px={8} boxShadow="sm">
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        {/* Logo */}
        <NextLink href="/" passHref>
          <Heading as="h1" fontSize="xl" color={logoColor} cursor="pointer">
            Asswuffah Diaries
          </Heading>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
