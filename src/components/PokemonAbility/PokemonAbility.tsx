import { useParams } from "react-router-dom";
import useGetAbility from "../../hooks/useGetAbility";
import { Container, Heading, Text, Box, Link, Spinner } from "@chakra-ui/react";
import ListOfPokemon from "./ListOfPokemon";

export default function PokemonAbility() {
  const id = useParams().id;
  const { loading, data, error } = useGetAbility(id as string);
  const PokemonAbility = data;

  return (
    <Container maxW="85vw">
      <Box p={2} textAlign="center">
        <Heading as="h1" size="xl">
          Pokemon Ability
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
      {PokemonAbility && (
        <>
          <Box textAlign="center">
            <Heading as="h2" size="lg">
              {PokemonAbility.displayName}
            </Heading>
          </Box>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Effect
          </Heading>
          <Text p={2}>{PokemonAbility.ability.effect}</Text>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Pokedex Entry
          </Heading>
          <Text p={2}>{PokemonAbility.ability.description}</Text>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Generation
          </Heading>
          <Text p={2}>
            This ability was first introduced on{" "}
            <Link href={`../../${PokemonAbility.generation.url}`}>
              {PokemonAbility.generation.name}
            </Link>
          </Text>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Pokemon
          </Heading>
          <Text p={2}>Pokemon that share this ability</Text>
          <Box p={2}>
            <ListOfPokemon list={PokemonAbility.pokemon} />
          </Box>
        </>
      )}
    </Container>
  );
}
