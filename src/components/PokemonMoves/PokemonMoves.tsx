import usePokemonMove from "../../hooks/usePokemonMove";
import ListOfPokemon from "../ListOfPokemon/ListOfPokemon";
import ListOfTypes from "../ListOfTypes/ListOfTypes";
import { useParams } from "react-router-dom";
import { Container, Box, Heading, Text, Spinner, Link } from "@chakra-ui/react";
export default function PokemonMoves() {
  const id = Number(useParams().id);
  const { data, loading, error } = usePokemonMove(id as number);

  return (
    <Container maxW="85vw">
      <Box p={2} textAlign="center">
        <Heading as="h1" size="xl">
          Pokemon Move
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
      {data && (
        <>
          <Box textAlign="center">
            <Heading as="h2" size="lg">
              {data.name}
            </Heading>
            <ListOfTypes list={data.type} />
          </Box>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Effect
          </Heading>
          <Text p={2}>{data.effect}</Text>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Pokedex Entry
          </Heading>
          <Text p={2}>{data.description}</Text>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Generation
          </Heading>
          <Text p={2}>
            This move was first introduced in{" "}
            <Link href={`../../${data.generation.url}`}>
              {data.generation.name}
            </Link>
          </Text>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Stats
          </Heading>
          <Text p={2}>Stats information</Text>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Pokemon
          </Heading>
          <Text p={2}>Pokemon that can learn this move</Text>
          <Box>
            <ListOfPokemon list={data?.learnedBy} />
          </Box>
        </>
      )}
    </Container>
  );
}
