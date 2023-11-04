import { useParams } from "react-router-dom";
import useGetAbility from "../../hooks/useGetAbility";
import { Container, Heading, Text, Box, Link } from "@chakra-ui/react";
import { Loading, ErrorMessage, ListOfPokemon } from "../../components";
import { IParsedPokemonAbility } from "../../types/pokemonAbility";

export default function PokemonAbility() {
  const id = useParams().id;
  const { loading, data, error } = useGetAbility(id as string);

  if (loading) return <Loading isLoading={loading} />;
  if (error) return <ErrorMessage />;
  if (data) return <PokemoAbilityContent data={data} />;
}

function PokemoAbilityContent(props: { data: IParsedPokemonAbility }) {
  const { data } = props;
  return (
    <Container maxW="85vw">
      <Header title="Pokemon Ability" />
      <AbilityDigest data={data} />
      <Effect data={data} />
      <PokedexEntry data={data} />
      <Generation data={data} />
      <PokemonList data={data} />
    </Container>
  );
}

function Header({ title }: { title: string }) {
  return (
    <>
      <Box p={2} textAlign="center">
        <Heading as="h1" size="xl">
          {title}
        </Heading>
      </Box>
    </>
  );
}

function AbilityDigest(props: { data: IParsedPokemonAbility }) {
  const { data } = props;
  return (
    <>
      <Box textAlign="center">
        <Heading as="h2" size="lg" color={"brand.accent"}>
          {data.displayName}
        </Heading>
      </Box>
    </>
  );
}

function Effect(props: { data: IParsedPokemonAbility }) {
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
        {data.ability.effect}
      </Text>
    </>
  );
}

function PokedexEntry(props: { data: IParsedPokemonAbility }) {
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
        {data.ability.description}
      </Text>
    </>
  );
}

function Generation(props: { data: IParsedPokemonAbility }) {
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
        This ability was first introduced on{" "}
        <Link color={"brand.accent"} href={`../../${data.generation.url}`}>
          {data.generation.name}
        </Link>
      </Text>
    </>
  );
}

function PokemonList(props: { data: IParsedPokemonAbility }) {
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
        Pokemon that share this ability
      </Text>
      <Box p={2}>
        <ListOfPokemon list={data.pokemon} />
      </Box>
    </>
  );
}
