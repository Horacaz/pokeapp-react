import { Progress } from "@chakra-ui/react";
export default function Loading() {
  return (
    <Progress
      size={["xs", "sm"]}
      isIndeterminate
      colorScheme="gray"
      backgroundColor={"black"}
    />
  );
}
