import { useParams } from "react-router-dom";
import { Container, Heading, Text, Box, Grid } from "@chakra-ui/react";
import useGetGeneration from "../../hooks/useGetGeneration";
import { IParsedGeneration } from "../../types/generation";
import {
  Loading,
  ErrorMessage,
  ListOfPokemon,
  ListOfMoves,
  ListOfTypes,
} from "../../components";
export default function PokemonGeneration() {
  const id = Number(useParams().id);
  const { data, loading, error } = useGetGeneration(id as number);

  if (loading) return <Loading isLoading={loading} />;
  if (error) return <ErrorMessage />;
  if (data) return <PokemonGenerationContent data={data} />;
}

function PokemonGenerationContent(props: { data: IParsedGeneration }) {
  const { data } = props;
  return (
    <Container maxW="90vw">
      <Header />
      <GenerationDigest data={data} />
      <MainRegion data={data} />
      <Types data={data} />
      <Abilities />
      <Moves data={data} />
      <Pokemon data={data} />
    </Container>
  );
}

function Header() {
  return (
    <Box p={2} textAlign="center">
      <Heading as="h1" size="xl" color={"brand.text"}>
        Pokemon Generation
      </Heading>
    </Box>
  );
}

function GenerationDigest(props: { data: IParsedGeneration }) {
  const { data } = props;
  return (
    <Box textAlign="center">
      <Heading as="h2" size="lg" color={"brand.accent"}>
        Generation {data.id}
      </Heading>
    </Box>
  );
}
function MainRegion(props: { data: IParsedGeneration }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size={["md", "lg"]}
        color={"brand.text"}
      >
        Main Region
      </Heading>
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        The Main Region that is featured on this Generation is{" "}
        <Text as="span" color={"brand.accent"}>
          {data.mainRegion}
        </Text>
        .
      </Text>
    </>
  );
}

function Types(props: { data: IParsedGeneration }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size={["md", "lg"]}
        color={"brand.text"}
      >
        Types
      </Heading>
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        The following Types were introduced in this Generation.
      </Text>
      <Grid gridTemplateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={1}>
        <ListOfTypes list={data.types} />
      </Grid>
    </>
  );
}

function Abilities() {
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size={["md", "lg"]}
        color={"brand.text"}
      >
        Abilities
      </Heading>
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        No Abilities were introduced in this Generation.
      </Text>
    </>
  );
}

function Moves(props: { data: IParsedGeneration }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size={["md", "lg"]}
        color={"brand.text"}
      >
        Moves
      </Heading>
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        A total of{" "}
        <Text as="span" color={"brand.accent"}>
          {data.moves.length}
        </Text>{" "}
        Moves were introduced in this Generation.
      </Text>
      <Box p={2}>
        <ListOfMoves list={data.moves} />
      </Box>
    </>
  );
}

function Pokemon(props: { data: IParsedGeneration }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size={["md", "lg"]}
        color={"brand.text"}
      >
        Pokemon
      </Heading>
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        A total of{" "}
        <Text as="span" color={"brand.accent"}>
          {data.pokemonSpecies.length}
        </Text>{" "}
        Pokemon were introduced in this Generation.
      </Text>
      <Box p={2}>
        <ListOfPokemon list={data.pokemonSpecies} />
      </Box>
    </>
  );
}
