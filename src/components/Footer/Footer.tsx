import { Box, Heading, Link } from "@chakra-ui/react";
export default function Footer() {
  return (
    <Box p={2} textAlign="center" backgroundColor={"black"}>
      <Heading as="h3" size={["sm", "md"]} color={"brand.text"} p={2} m={2}>
        <Link
          textDecoration={"none"}
          _hover={{ textDecoration: "none" }}
          href="https://github.com/Horacaz/pokeapp-react"
        >
          Pokemon App by Horacio Cazavant
        </Link>
      </Heading>
    </Box>
  );
}
