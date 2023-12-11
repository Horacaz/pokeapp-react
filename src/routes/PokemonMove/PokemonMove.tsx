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
      <Heading as="h2" size={["md", "lg"]} color={"brand.primary"}>
        {data.name}
      </Heading>
      <ListOfTypes list={data.type} />
    </Box>
  );
}

function Effect(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Effect" />
      <Text fontSize={["sm", "md"]} color={"brand.text"} fontWeight={"bold"}>
        {data.effect}
      </Text>
    </Box>
  );
}

function PokedexEntry(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Pokedex Entry" />

      <Text fontSize={["sm", "md"]} color={"brand.text"} fontWeight={"bold"}>
        {data.description}
      </Text>
    </Box>
  );
}

function Generation(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Generation" />
      <Text fontSize={["sm", "md"]} color={"brand.text"} fontWeight={"bold"}>
        This move was first introduced in{" "}
        <Link color={"brand.primary"} href={`../../${data.generation.url}`}>
          {data.generation.name}
        </Link>
      </Text>
    </Box>
  );
}

function Stats() {
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Stats" />
      <PokemonSectionSubtitle subTitle="Stats information" />
    </Box>
  );
}

function PokemonList(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Pokemon" />
      <PokemonSectionSubtitle subTitle="Pokemon that can learn this move" />
      <ListOfPokemon list={data?.learnedBy} />
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

function PokemonSectionSubtitle(props: { subTitle: string }) {
  return (
    <Text
      pb={2}
      fontSize={["sm", "md"]}
      color={"brand.primary"}
      fontWeight={"bold"}
    >
      {props.subTitle}
    </Text>
  );
}
