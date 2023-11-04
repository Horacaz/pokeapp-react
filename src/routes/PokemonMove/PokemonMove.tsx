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
    <Container maxW="85vw">
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
      <Heading as="h1" size="xl">
        {title}
      </Heading>
    </Box>
  );
}

function MoveDigest(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box textAlign="center">
      <Heading as="h2" size="lg" color={"brand.accent"}>
        {data.name}
      </Heading>
      <ListOfTypes list={data.type} />
    </Box>
  );
}

function Effect(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size="lg"
      >
        Effect
      </Heading>
      <Text py={2} color={"brand.text"} fontWeight={"bold"}>
        {data.effect}
      </Text>
    </>
  );
}

function PokedexEntry(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size="lg"
      >
        Pokedex Entry
      </Heading>
      <Text py={2} color={"brand.text"} fontWeight={"bold"}>
        {data.description}
      </Text>
    </>
  );
}

function Generation(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size="lg"
      >
        Generation
      </Heading>
      <Text py={2} color={"brand.text"} fontWeight={"bold"}>
        This move was first introduced in{" "}
        <Link color={"brand.accent"} href={`../../${data.generation.url}`}>
          {data.generation.name}
        </Link>
      </Text>
    </>
  );
}

function Stats() {
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size="lg"
      >
        Stats
      </Heading>
      <Text py={2} color={"brand.text"} fontWeight={"bold"}>
        Stats information
      </Text>
    </>
  );
}

function PokemonList(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size="lg"
      >
        Pokemon
      </Heading>
      <Text py={2} color={"brand.accent"} fontWeight={"bold"}>
        Pokemon that can learn this Move
      </Text>
      <Box>
        <ListOfPokemon list={data?.learnedBy} />
      </Box>
    </>
  );
}
