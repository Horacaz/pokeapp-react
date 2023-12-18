import { Link, Heading, Box, Flex } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
export default function Header() {
  return (
    <Box p={1} backgroundColor={"black"}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDir={["column", "column", "column", "row"]}
      >
        <Heading
          as="h1"
          size={"xl"}
          color={"brand.text"}
          p={2}
          m={1}
          display={"inline-block"}
        >
          <Link
            textDecoration={"none"}
            _hover={{ textDecoration: "none" }}
            href="/"
          >
            Pokemon Application
          </Link>
        </Heading>
        <SearchBar />
      </Flex>
    </Box>
  );
}
