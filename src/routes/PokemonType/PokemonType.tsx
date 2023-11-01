import { useParams } from "react-router-dom";
import ListOfTypes from "../../components/ListOfTypes";
import ListOfMoves from "../../components/ListOfMoves";
import ListOfPokemon from "../../components/ListOfPokemon";
import useGetTypes from "../../hooks/useGetTypes";
import { IParsedType } from "../../types/pokemonType";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { Container, Box, Heading, Text, Link } from "@chakra-ui/react";
export default function PokemonType() {
  const id = Number(useParams().id);
  const { loading, data, error } = useGetTypes(id);

  if (loading) return <Loading isLoading={loading} />;
  if (error) return <ErrorMessage />;
  if (data) return <PokemonTypeContent data={data} />;
}

function PokemonTypeContent(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <Container maxW="85vw">
      <Header title="Pokemon Type" />
      <TypeDigest data={data} />
      <Information data={data} />
      <DamageModifiers data={data} />
      <Moves data={data} />
      <Pokemon data={data} />
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

function TypeDigest(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <Box textAlign="center">
      <Heading as="h2" size="lg">
        <ListOfTypes list={data.name} />
      </Heading>
    </Box>
  );
}

function Information(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size="lg"
      >
        Information
      </Heading>
      <Text py={2} color={"brand.text"} fontWeight={"bold"}>
        It first introduction was on{" "}
        <Link color={"brand.accent"} href={`../../${data.generation.url}`}>
          {data.generation.name}
        </Link>
        . There are currently{" "}
        <Text as="span" color={"brand.accent"}>
          {data.moves.length}
        </Text>{" "}
        Moves and
        <Text as="span" color={"brand.accent"}>
          {" "}
          {data.pokemon.length}
        </Text>{" "}
        Pokemon that share this Type. Its{" "}
        <Text as="span" color={"brand.accent"}>
          Damage Class
        </Text>{" "}
        is{" "}
        <Text as="span" color={"brand.accent"}>
          {data.moveDamageClass.name}
        </Text>
        .
      </Text>
    </>
  );
}

function DamageModifiers(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size="lg"
      >
        Damage Modifiers
      </Heading>
      <Text py={2} color={"brand.accent"} fontWeight={"bold"}>
        Takes Double Damage From
      </Text>
      <Box p={2}>
        <ListOfTypes list={data.damageRelations.doubleDamageFrom} />
      </Box>
      <Text py={2} color={"brand.accent"} fontWeight={"bold"}>
        Deals Double Damage to
      </Text>
      <Box p={2}>
        <ListOfTypes list={data.damageRelations.doubleDamageTo} />
      </Box>
      <Text py={2} color={"brand.accent"} fontWeight={"bold"}>
        Takes Half Damage From
      </Text>
      <Box p={2}>
        <ListOfTypes list={data.damageRelations.halfDamageFrom} />
      </Box>
      <Text py={2} color={"brand.accent"} fontWeight={"bold"}>
        Deals Half Damage to
      </Text>
      <Box p={2}>
        <ListOfTypes list={data.damageRelations.halfDamageTo} />
      </Box>
      <Text py={2} color={"brand.accent"} fontWeight={"bold"}>
        Takes No Damage From
      </Text>
      <Box p={2}>
        <ListOfTypes list={data.damageRelations.noDamageFrom} />
      </Box>
      <Text py={2} color={"brand.accent"} fontWeight={"bold"}>
        Deals No Damage to
      </Text>
      <Box p={2}>
        <ListOfTypes list={data.damageRelations.noDamageTo} />
      </Box>
    </>
  );
}

function Moves(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="5px solid white"
        display="inline-block"
        as="h2"
        size="lg"
      >
        Moves
      </Heading>
      <Text py={2} color={"brand.accent"} fontWeight={"bold"}>
        Moves that share this type
      </Text>
      <Box p={2}>
        <ListOfMoves list={data.moves} />
      </Box>
    </>
  );
}

function Pokemon(props: { data: IParsedType }) {
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
        Pokemon that share this type
      </Text>
      <Box p={2}>
        <ListOfPokemon list={data.pokemon} />
      </Box>
    </>
  );
}
