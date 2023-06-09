import { useParams } from "react-router-dom";
import { Container, Heading, Text, Box, Spinner } from "@chakra-ui/react";
import ListOfPokemon from "../ListOfPokemon/ListOfPokemon";
import ListOfMoves from "../ListOfMoves/ListOfMoves";
import ListOfTypes from "../ListOfTypes/ListOfTypes";
import useGetGeneration from "../../hooks/useGetGeneration";
export default function PokemonGeneration() {
  const id = Number(useParams().id);
  const { data, loading, error } = useGetGeneration(id as number);
  const Generation = { ...data };
  return (
    <>
      <Container maxW="85vw">
        <Box p={2} textAlign="center">
          <Heading as="h1" size="xl">
            Pokemon Generation
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
                Generation {Generation.id}
              </Heading>
            </Box>
            <Heading
              borderBottom="5px solid black"
              display="inline-block"
              as="h2"
              size="lg"
            >
              Main Region
            </Heading>
            <Text p={2}>{Generation.mainRegion}</Text>
            <Heading
              borderBottom="5px solid black"
              display="inline-block"
              as="h2"
              size="lg"
            >
              Types
            </Heading>
            {Generation.types && (
              <>
                <Text p={2}>
                  The following types were introduced in this generation
                </Text>
                <Box p={2}>
                  <ListOfTypes list={Generation.types} />
                </Box>
              </>
            )}
            <Heading
              borderBottom="5px solid black"
              display="inline-block"
              as="h2"
              size="lg"
            >
              Abilities
            </Heading>
            <Text p={2}>No abilities were introduced in this generation.</Text>
            <Heading
              borderBottom="5px solid black"
              display="inline-block"
              as="h2"
              size="lg"
            >
              Moves
            </Heading>
            {Generation.moves && (
              <>
                <Text p={2}>
                  A total of {Generation.moves.length} moves were introduced in
                  this generation.
                </Text>
                <Box p={2}>
                  <ListOfMoves list={Generation.moves} />
                </Box>
              </>
            )}

            {Generation.pokemonSpecies && (
              <>
                <Heading
                  borderBottom="5px solid black"
                  display="inline-block"
                  as="h2"
                  size="lg"
                >
                  Pokemon
                </Heading>
                <Text p={2}>
                  A total of {Generation.pokemonSpecies.length} Pokemon were
                  introduced in this generation.
                </Text>
                <Box p={2}>
                  <ListOfPokemon list={Generation.pokemonSpecies} />
                </Box>
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
}
