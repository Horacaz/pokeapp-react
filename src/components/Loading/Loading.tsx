import { Spinner } from "@chakra-ui/react";
export default function Loading(props: { isLoading: boolean }) {
  return (
    !props.isLoading || (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="3xl"
      />
    )
  );
}
