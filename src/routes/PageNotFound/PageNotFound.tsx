import { Heading, Link, Button, Flex } from "@chakra-ui/react";
export default function PageNotFound() {
  return (
    <Flex
      justifyContent="center"
      m={4}
      p={4}
      flexDir="column"
      alignItems="center"
    >
      <Flex
        m={4}
        p={4}
        backgroundColor="brand.accent"
        borderRadius={5}
        flexDir="column"
        alignItems="center"
      >
        <Heading
          as="h2"
          fontSize={["sm", "md", "lg", "xl"]}
          textColor={"brand.text"}
          textAlign={"center"}
        >
          The requested page was not found.
        </Heading>
      </Flex>
      <Button
        _hover={{
          bg: "brand.primary",
          color: "brand.text",
          textDecoration: "none",
        }}
        fontWeight="bold"
        backgroundColor="brand.secondary"
        color="brand.background"
        variant="solid"
        fontSize={["sm", "md", "lg"]}
        whiteSpace="normal"
        textAlign={"center"}
        my={2}
        p={2}
        maxW={"50%"}
      >
        <Link href={"/"} _hover={{ textDecoration: "none" }}>
          Click here to Return
        </Link>
      </Button>
    </Flex>
  );
}
