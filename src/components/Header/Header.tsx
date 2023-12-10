import { Link, Heading, Box } from "@chakra-ui/react";
export default function Header() {
  return (
    <Box p={1} backgroundColor={"black"}>
      <Heading
        as="h1"
        size={["md", "lg"]}
        color={"brand.text"}
        p={2}
        m={1}
        display={"inline-block"}
      >
        <Link textDecoration={"none"} _hover={{ textDecoration: "none" }}>
          Pokemon Application
        </Link>
      </Heading>
    </Box>
  );
}
