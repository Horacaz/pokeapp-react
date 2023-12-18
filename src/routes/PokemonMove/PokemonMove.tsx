import usePokemonMove from "../../hooks/usePokemonMove";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  Heading,
  Text,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { IParsedPokemonMove } from "../../types/pokemonMove";
import {
  Loading,
  ErrorMessage,
  ListOfTypes,
  ListOfPokemon,
  Footer,
} from "../../components";
export default function PokemonMove() {
  const id = Number(useParams().id);
  const { data, loading, error } = usePokemonMove(id as number);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (data) return <PokemonMoveContent data={data} />;
}

function PokemonMoveContent(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <>
      <Container maxW={["100vw", "90vw"]}>
        <Title title="Pokemon Move" />
        <MoveDigest data={data} />
        <Grid templateColumns={["", "2fr 1fr"]}>
          <GridItem>
            <Effect data={data} />
            <PokedexEntry data={data} />
            <Generation data={data} />
          </GridItem>
          <GridItem>
            <Stats data={data} />
          </GridItem>
        </Grid>
        <PokemonList data={data} />
      </Container>
      <Footer />
    </>
  );
}
function Title({ title }: { title: string }) {
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

function Stats(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Stats" />
      <PokemonSectionSubtitle subTitle="Stats of this Move" />
      <Grid templateColumns={"repeat(2, 1fr)"}>
        <PokemonStat title="Damage Class" value={data.damageClass} />
        <PokemonStat title="Effect Chance" value={data.effectChance} />
        <PokemonStat title="PP" value={data.pp} />
        <PokemonStat title="Power" value={data.power} />
        <PokemonStat title="Accuracy" value={data.accuracy} />
      </Grid>
    </Box>
  );
}

function PokemonList(props: { data: IParsedPokemonMove }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Pokemon" />
      {data.learnedBy.length > 0 ? (
        <>
          <PokemonSectionSubtitle subTitle="Pokemon that can learn this move" />
          <ListOfPokemon list={data.learnedBy} />
        </>
      ) : (
        <Text fontSize={["sm", "md"]} color={"brand.text"} fontWeight={"bold"}>
          No Pokemon can learn this move
        </Text>
      )}
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

function PokemonStat(props: { title: string; value: string | number | null }) {
  return (
    <Box key={props.title}>
      <Text
        fontSize={["sm", "md", "lg"]}
        fontWeight={"bold"}
        color={"brand.text"}
      >
        {props.title}
      </Text>
      <Text
        fontSize={["sm", "md", "lg"]}
        fontWeight={"bold"}
        color={"brand.primary"}
      >
        {props.value === null ? "None" : props.value}
      </Text>
    </Box>
  );
}
