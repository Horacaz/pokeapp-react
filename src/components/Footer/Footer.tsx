import { Text } from "@chakra-ui/react";
export default function Footer() {
  return (
    <Text
      size={["md", "lg"]}
      color={"brand.text"}
      p={2}
      m={2}
      display={"inline-block"}
    >
      Pokemon Application Footer
    </Text>
  );
}
