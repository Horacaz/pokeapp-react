import { useParams } from "react-router-dom";
import useGetTypes from "../../hooks/useGetTypes";
import { IParsedType } from "../../types/pokemonType";
import {
  Container,
  Box,
  Heading,
  Text,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  ErrorMessage,
  Loading,
  ListOfTypes,
  ListOfPokemon,
  ListOfMoves,
} from "../../components";
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
    <Container maxW="100vw">
      <Box m={2}>
        <Header title="Pokemon Type" />
        <TypeDigest data={data} />
        <Information data={data} />
        <DamageModifiers data={data} />
        <Moves data={data} />
        <Pokemon data={data} />
      </Box>
    </Container>
  );
}

function Header({ title }: { title: string }) {
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
    <>
      <Heading
        borderBottom="4px solid white"
        display="inline-block"
        as="h2"
        size={["md", "lg"]}
        color={"brand.text"}
      >
        Information
      </Heading>
      <Text color={"brand.text"} fontWeight={"bold"}>
        It first introduction was on{" "}
        <Link color={"brand.accent"} href={`../../${data.generation.url}`}>
          {data.generation.name}
        </Link>
      </Text>
      <Text color={"brand.text"} fontWeight={"bold"}>
        There are currently {data.moves.length} Moves and {data.pokemon.length}{" "}
        Pokemon that share this Type.
      </Text>
      <Text color={"brand.text"} fontWeight={"bold"}>
        Its Damage Class is {data.moveDamageClass.name}.
      </Text>
    </>
  );
}
function DamageModifiers(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="4px solid white"
        display="inline-block"
        as="h2"
        size={["md", "lg"]}
        color={"brand.text"}
      >
        Damage Modifiers
      </Heading>
      <Grid
        templateColumns={["repeat(1, 2fr)", "repeat(3, 1fr)"]}
        textAlign={["start", "center"]}
      >
        <GridItem>
          <Box>
            <Text
              py={2}
              fontSize={["xs", "sm", "md"]}
              color={"brand.accent"}
              fontWeight={"bold"}
            >
              Takes Double Damage From
            </Text>
            <Box>
              <ListOfTypes list={data.damageRelations.doubleDamageFrom} />
            </Box>
          </Box>

          <Text
            py={2}
            fontSize={["xs", "sm", "md"]}
            color={"brand.accent"}
            fontWeight={"bold"}
          >
            Deals Double Damage to
          </Text>
          <Box>
            <ListOfTypes list={data.damageRelations.doubleDamageTo} />
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Text
              py={2}
              fontSize={["xs", "sm", "md"]}
              color={"brand.accent"}
              fontWeight={"bold"}
            >
              Takes Half Damage From
            </Text>
            <Box>
              <ListOfTypes list={data.damageRelations.halfDamageFrom} />
            </Box>

            <Text
              py={2}
              fontSize={["xs", "sm", "md"]}
              color={"brand.accent"}
              fontWeight={"bold"}
            >
              Deals Half Damage to
            </Text>
            <Box>
              <ListOfTypes list={data.damageRelations.halfDamageTo} />
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Text
              py={2}
              fontSize={["xs", "sm", "md"]}
              color={"brand.accent"}
              fontWeight={"bold"}
            >
              Takes No Damage From
            </Text>
            <Box>
              <ListOfTypes list={data.damageRelations.noDamageFrom} />
            </Box>

            <Text
              py={2}
              fontSize={["xs", "sm", "md"]}
              color={"brand.accent"}
              fontWeight={"bold"}
            >
              Deals No Damage to
            </Text>
            <Box>
              <ListOfTypes list={data.damageRelations.noDamageTo} />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

function Moves(props: { data: IParsedType }) {
  const { data } = props;
  return (
    <>
      <Heading
        borderBottom="4px solid white"
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
        color={"brand.accent"}
        fontWeight={"bold"}
      >
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
        borderBottom="4px solid white"
        display="inline-block"
        as="h2"
        size={["md", "lg"]}
        color={"brand.text"}
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
