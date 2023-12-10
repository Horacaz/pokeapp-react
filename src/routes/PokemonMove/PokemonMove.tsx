import usePokemonMove from "../../hooks/usePokemonMove";
import { useParams } from "react-router-dom";
import { Container, Box, Heading, Text, Link } from "@chakra-ui/react";
import { IParsedPokemonMove } from "../../types/pokemonMove";
import {
  Loading,
  ErrorMessage,
  ListOfTypes,
  ListOfPokemon,
} from "../../components";
export default function PokemonMove() {
  const id = Number(useParams().id);
  const { data, loading, error } = usePokemonMove(id as number);

  if (loading) return <Loading isLoading={loading} />;
  if (error) return <ErrorMessage />;
  if (data) return <PokemonMoveContent data={data} />;
}

function PokemonMoveContent(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Container maxW={["100vw", "90vw"]}>
      <Header title="Pokemon Move" />
      <MoveDigest data={data} />
      <Effect data={data} />
      <PokedexEntry data={data} />
      <Generation data={data} />
      <Stats />
      <PokemonList data={data} />
    </Container>
  );
}
function Header({ title }: { title: string }) {
  return (
    <Box p={2} textAlign="center">
      <Heading as="h1" size="xl" color={"brand.text"}>
        {title}
      </Heading>
    </Box>
  );
}

function MoveDigest(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box textAlign="center">
      <Heading as="h2" py={2} size={["md", "lg"]} color={"brand.accent"}>
        {data.name}
      </Heading>
      <ListOfTypes list={data.type} />
    </Box>
  );
}

function Effect(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box my={2}>
      <Heading
        borderBottom="4px solid white"
        display="inline-block"
        as="h2"
        size={["lg", "xl"]}
        color={"brand.text"}
      >
        Effect
      </Heading>
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        {data.effect}
      </Text>
    </Box>
  );
}

function PokedexEntry(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box my={2}>
      <Heading
        borderBottom="4px solid white"
        display="inline-block"
        as="h2"
        size={["lg", "xl"]}
        color={"brand.text"}
      >
        Pokedex Entry
      </Heading>
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        {data.description}
      </Text>
    </Box>
  );
}

function Generation(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box my={2}>
      <Heading
        borderBottom="4px solid white"
        display="inline-block"
        as="h2"
        size={["lg", "xl"]}
        color={"brand.text"}
      >
        Generation
      </Heading>
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        This move was first introduced in{" "}
        <Link color={"brand.accent"} href={`../../${data.generation.url}`}>
          {data.generation.name}
        </Link>
      </Text>
    </Box>
  );
}

function Stats() {
  return (
    <Box my={2}>
      <Heading
        borderBottom="4px solid white"
        display="inline-block"
        as="h2"
        size={["lg", "xl"]}
        color={"brand.text"}
      >
        Stats
      </Heading>
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.text"}
        fontWeight={"bold"}
      >
        Stats information
      </Text>
    </Box>
  );
}

function PokemonList(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box my={2}>
      <Heading
        borderBottom="4px solid white"
        display="inline-block"
        as="h2"
        size={["lg", "xl"]}
        color={"brand.text"}
      >
        Pokemon
      </Heading>
      <Text
        py={2}
        fontSize={["sm", "md"]}
        color={"brand.accent"}
        fontWeight={"bold"}
      >
        Pokemon that can learn this Move
      </Text>
      <Box>
        <ListOfPokemon list={data?.learnedBy} />
      </Box>
    </Box>
  );
}
