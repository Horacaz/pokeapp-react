import { useParams } from "react-router-dom";
import useGetAbility from "../../hooks/useGetAbility";
import { Container, Heading, Text, Box, Link } from "@chakra-ui/react";
import { Loading, ErrorMessage, ListOfPokemon, Footer } from "../../components";
import { IParsedPokemonAbility } from "../../types/pokemonAbility";

export default function PokemonAbility() {
  const id = useParams().id;
  const { loading, data, error } = useGetAbility(id as string);

  if (loading) return <Loading isLoading={loading} />;
  if (error) return <ErrorMessage error={error} />;
  if (data) return <PokemoAbilityContent data={data} />;
}

function PokemoAbilityContent(props: { data: IParsedPokemonAbility }) {
  const { data } = props;
  return (
    <>
      <Container maxW={["100vw", "90vw"]}>
        <Title title="Pokemon Ability" />
        <AbilityDigest data={data} />
        <Effect data={data} />
        <PokedexEntry data={data} />
        <Generation data={data} />
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

function AbilityDigest(props: { data: IParsedPokemonAbility }) {
  const { data } = props;
  return (
    <Box textAlign="center">
      <Heading as="h2" size="lg" color={"brand.primary"}>
        {data.displayName}
      </Heading>
    </Box>
  );
}

function Effect(props: { data: IParsedPokemonAbility }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Effect" />
      <Text
        py={2}
        color={"brand.text"}
        fontSize={["sm", "md"]}
        fontWeight={"bold"}
      >
        {data.ability.effect}
      </Text>
    </Box>
  );
}

function PokedexEntry(props: { data: IParsedPokemonAbility }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Pokedex Entry" />
      <Text
        py={2}
        color={"brand.text"}
        fontSize={["sm", "md"]}
        fontWeight={"bold"}
      >
        {data.ability.description}
      </Text>
    </Box>
  );
}

function Generation(props: { data: IParsedPokemonAbility }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Generation" />
      <Text
        py={2}
        color={"brand.text"}
        fontSize={["sm", "md"]}
        fontWeight={"bold"}
      >
        This ability was first introduced on{" "}
        <Link color={"brand.primary"} href={`../../${data.generation.url}`}>
          {data.generation.name}
        </Link>
      </Text>
    </Box>
  );
}

function PokemonList(props: { data: IParsedPokemonAbility }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Pokemon" />
      <PokemonSectionSubtitle subTitle="Pokemon that share this ability" />
      <Box p={2}>
        {data.pokemon.length > 0 ? (
          <ListOfPokemon list={data.pokemon} />
        ) : (
          <Text
            py={2}
            color={"brand.text"}
            fontSize={["sm", "md"]}
            fontWeight={"bold"}
          >
            There are no Pokemon that share this ability
          </Text>
        )}
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
