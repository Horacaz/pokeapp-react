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
    <Container maxW={["100vw", "90vw"]}>
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
      <Heading as="h2" size="lg" color={"brand.primary"}>
        Generation {data.id}
      </Heading>
    </Box>
  );
}
function MainRegion(props: { data: IParsedGeneration }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Main Region" />
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        The Main Region that is featured on this Generation is{" "}
        <Text as="span" color={"brand.primary"}>
          {data.mainRegion}
        </Text>
        .
      </Text>
    </Box>
  );
}

function Types(props: { data: IParsedGeneration }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Types" />
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
    </Box>
  );
}

function Abilities() {
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Abilities" />
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        No Abilities were introduced in this Generation.
      </Text>
    </Box>
  );
}

function Moves(props: { data: IParsedGeneration }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Moves" />
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        A total of{" "}
        <Text as="span" color={"brand.primary"}>
          {data.moves.length}
        </Text>{" "}
        Moves were introduced in this Generation.
      </Text>
      <Box p={2}>
        <ListOfMoves list={data.moves} />
      </Box>
    </Box>
  );
}

function Pokemon(props: { data: IParsedGeneration }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Pokemon" />
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        A total of{" "}
        <Text as="span" color={"brand.primary"}>
          {data.pokemonSpecies.length}
        </Text>{" "}
        Pokemon were introduced in this Generation.
      </Text>
      <Box p={2}>
        <ListOfPokemon list={data.pokemonSpecies} />
      </Box>
    </Box>
  );
}

function PokemonSection(props: { title: string }) {
  return (
    <Heading
      display="inline-block"
      as="h2"
      size={["lg", "xl"]}
      color={"brand.text"}
    >
      {props.title}
    </Heading>
  );
}
