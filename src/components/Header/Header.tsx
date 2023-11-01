import { Link, Heading } from "@chakra-ui/react";
export default function Header() {
  return (
    <Link href="/">
      <Heading
        as="h1"
        size="xl"
        color={"grey.500"}
        p={2}
        m={2}
        display={"inline-block"}
      >
        Pokemon Application
      </Heading>
    </Link>
  );
}
