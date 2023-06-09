import { useParams } from "react-router-dom";
import useGetTypes from "../../hooks/useGetTypes";
import { Container, Box, Heading, Text, Spinner, Link } from "@chakra-ui/react";
export default function PokemonTypes() {
  const id = Number(useParams().id);
  const { loading, data, error } = useGetTypes(id);
  return (
    <Container maxW="85vw">
      <Box p={2} textAlign="center">
        <Heading as="h1" size="xl">
          Pokemon Type
        </Heading>
      </Box>
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="3xl"
        />
      )}
    </Container>
  );
}
