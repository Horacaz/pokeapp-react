import { useParams } from "react-router-dom";
import ListOfTypes from "../ListOfTypes/ListOfTypes";
import ListOfMoves from "../ListOfMoves/ListOfMoves";
import ListOfPokemon from "../ListOfPokemon/ListOfPokemon";
import useGetTypes from "../../hooks/useGetTypes";
import { Container, Box, Heading, Text, Spinner, Link } from "@chakra-ui/react";
export default function PokemonTypes() {
  const id = Number(useParams().id);
  const { loading, data, error } = useGetTypes(id);
  console.log(data);
  return (
    <Container maxW="85vw">
      <Box p={2} textAlign="center">
        <Heading as="h1" size="xl">
          Pokemon Type
        </Heading>
      </Box>
      {data && (
        <>
          <Box textAlign="center">
            <Heading as="h2" size="lg">
              <ListOfTypes list={data.name} />
            </Heading>
          </Box>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Information
          </Heading>
          <Text p={2}>
            It first introduction was on{" "}
            <Link href={data.generation.url}>{data.generation.name}</Link>.
            There are currently {data.moves.length} moves and{" "}
            {data.pokemon.length} Pokemon that share this type. Its Damage Class
            is {data.moveDamageClass.name}.
          </Text>

          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Damage Modifiers
          </Heading>
          <Text p={2}>Damage Modifiers</Text>
          <Text p={2}>Takes Double Damage From</Text>
          <Box p={2}>
            <ListOfTypes list={data.damageRelations.doubleDamageFrom} />
          </Box>
          <Text p={2}>Deals Double Damage to</Text>
          <Box p={2}>
            <ListOfTypes list={data.damageRelations.doubleDamageTo} />
          </Box>
          <Text p={2}>Takes Half Damage From</Text>
          <Box p={2}>
            <ListOfTypes list={data.damageRelations.halfDamageFrom} />
          </Box>
          <Text p={2}>Deals Half Damage to</Text>
          <Box p={2}>
            <ListOfTypes list={data.damageRelations.halfDamageTo} />
          </Box>
          <Text p={2}>Takes No Damage From</Text>
          <Box p={2}>
            <ListOfTypes list={data.damageRelations.noDamageFrom} />
          </Box>
          <Text p={2}>Deals No Damage to</Text>
          <Box p={2}>
            <ListOfTypes list={data.damageRelations.noDamageTo} />
          </Box>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Moves
          </Heading>
          <Text p={2}>Moves that share this type</Text>
          <Box p={2}>
            <ListOfMoves list={data.moves} />
          </Box>
          <Heading
            borderBottom="5px solid black"
            display="inline-block"
            as="h2"
            size="lg"
          >
            Pokemon
          </Heading>
          <Text p={2}>Pokemon that share this type</Text>
          <Box p={2}>
            <ListOfPokemon list={data.pokemon} />
          </Box>
        </>
      )}
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
