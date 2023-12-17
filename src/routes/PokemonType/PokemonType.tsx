import { useParams } from "react-router-dom";
import useGetTypes from "../../hooks/useGetTypes";
import { IParsedType } from "../../types/pokemonType";
import { Container, Box, Heading, Text, Link, Grid } from "@chakra-ui/react";
import {
  ErrorMessage,
  Loading,
  ListOfTypes,
  ListOfPokemon,
  ListOfMoves,
  Footer,
} from "../../components";
export default function PokemonType() {
  const id = Number(useParams().id);
  const { loading, data, error } = useGetTypes(id);

  if (loading) return <Loading isLoading={loading} />;
  if (error) return <ErrorMessage error={error} />;
  if (data) return <PokemonTypeContent data={data} />;
}

function PokemonTypeContent(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <>
      <Container maxW={["100vw", "90vw"]}>
        <Box m={2}>
          <Title title="Pokemon Type" />
          <TypeDigest data={data} />
          <Information data={data} />
          <DamageModifiers data={data} />
          <Moves data={data} />
          <Pokemon data={data} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

function Title({ title }: { title: string }) {
  return (
    <Box p={2} textAlign="center" color={"brand.text"}>
      <Heading as="h1" size={"xl"}>
        {title}
      </Heading>
    </Box>
  );
}

function TypeDigest(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <Box textAlign="center">
      <ListOfTypes list={data.name} />
    </Box>
  );
}

function Information(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Information" />
      <Box p={2} borderRadius={5}>
        <Text fontSize={["sm", "md"]} color={"brand.text"} fontWeight={"bold"}>
          Its first introduction was on{" "}
          <Link color={"brand.primary"} href={`../../${data.generation.url}`}>
            {data.generation.name}
          </Link>
        </Text>
        <Text fontSize={["sm", "md"]} color={"brand.text"} fontWeight={"bold"}>
          There are currently{" "}
          <Text as="span" color={"brand.primary"}>
            {data.moves.length}
          </Text>{" "}
          Moves and{" "}
          <Text as="span" color={"brand.primary"}>
            {data.pokemon.length}
          </Text>{" "}
          Pokemon that share this Type.
        </Text>
        <Text fontSize={["sm", "md"]} color={"brand.text"} fontWeight={"bold"}>
          Its Damage Class is {data.moveDamageClass.name}.
        </Text>
      </Box>
    </Box>
  );
}
function DamageModifiers(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Damage Modifiers" />
      <Box p={2} borderRadius={5}>
        <PokemonSectionSubtitle text="Takes Double Damage From" />
        <Grid
          gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={2}
        >
          <ListOfTypes list={data.damageRelations.doubleDamageFrom} />
        </Grid>
      </Box>
      <Box p={2} borderRadius={5}>
        <PokemonSectionSubtitle text="Deals Double Damage to" />
        <Grid
          gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={2}
        >
          <ListOfTypes list={data.damageRelations.doubleDamageTo} />
        </Grid>
      </Box>
      <Box p={2} borderRadius={5}>
        <PokemonSectionSubtitle text="Takes Half Damage From" />
        <Grid
          gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={1}
        >
          <ListOfTypes list={data.damageRelations.halfDamageFrom} />
        </Grid>
      </Box>
      <Box p={2} borderRadius={5}>
        <PokemonSectionSubtitle text="Deals Half Damage to" />
        <Grid
          gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={2}
        >
          <ListOfTypes list={data.damageRelations.halfDamageTo} />
        </Grid>
      </Box>
      <Box p={2} borderRadius={5}>
        <PokemonSectionSubtitle text="Takes No Damage From" />
        <Grid
          gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={2}
        >
          <ListOfTypes list={data.damageRelations.noDamageFrom} />
        </Grid>
      </Box>
      <Box p={2} borderRadius={5}>
        <PokemonSectionSubtitle text="Deals No Damage to" />
        <Grid
          gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={2}
        >
          <ListOfTypes list={data.damageRelations.noDamageTo} />
        </Grid>
      </Box>
    </Box>
  );
}

function Moves(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Moves" />
      <Box p={2} borderRadius={5}>
        <PokemonSectionSubtitle text="Moves that share this type" />

        <ListOfMoves list={data.moves} />
      </Box>
    </Box>
  );
}

function Pokemon(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Pokemon" />
      <Box p={2} borderRadius={5}>
        <PokemonSectionSubtitle text="Pokemon that share this type" />

        <ListOfPokemon list={data.pokemon} />
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

function PokemonSectionSubtitle(props: { text: string }) {
  const { text } = props;
  return (
    <Text
      pb={2}
      fontSize={["sm", "md"]}
      color={"brand.primary"}
      fontWeight={"bold"}
    >
      {text}
    </Text>
  );
}
