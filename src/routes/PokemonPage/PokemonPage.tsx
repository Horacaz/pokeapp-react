import { useState } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import { TPokemon } from "../../types/pokemon";
import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Grid,
  GridItem,
  Stack,
  HStack,
  Container,
} from "@chakra-ui/react";
import {
  Loading,
  ErrorMessage,
  ListOfTypes,
  ListOfMoves,
  ListOfPokemon,
} from "../../components";

import { useParams } from "react-router-dom";
export default function PokemonPage() {
  const [shiny, setShiny] = useState(false);
  const id = useParams().id as string;
  const { loading, data, error } = useGetPokemon(id);

  if (loading) return <Loading isLoading={loading} />;
  if (error) return <ErrorMessage />;
  if (data)
    return <PokemonPageContent data={data} shiny={shiny} setShiny={setShiny} />;
}

type PokemonPageContent = {
  data: TPokemon;
  shiny: boolean;
  setShiny: (shiny: boolean) => void;
};
function PokemonPageContent(props: PokemonPageContent) {
  const { data, shiny, setShiny } = props;
  return (
    <Container maxW={["100vw"]}>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "2fr 1fr"]}
        borderRadius={5}
        gap={2}
      >
        <GridItem order={[2, 2, 1]}>
          <PokemonInformation data={data} />
          <PokemonAbilities data={data} />
        </GridItem>
        <GridItem order={[1, 1, 2]}>
          <PokemonDigest data={data} shiny={shiny} onClick={setShiny} />
        </GridItem>
      </Grid>
      <PokemonVarieties data={data} />
      <PokemonMoves data={data} />
    </Container>
  );
}

type PokemonDigest = {
  data: TPokemon;
  shiny: boolean;
  onClick: (shiny: boolean) => void;
};
function PokemonDigest(props: PokemonDigest) {
  const { data, shiny, onClick } = props;
  return (
    <Box backgroundColor={"brand.accent"} borderRadius={5} m={4} p={4}>
      <PokemonCard
        pokemon={data}
        onClick={() => onClick(!shiny)}
        isShiny={shiny}
      />
    </Box>
  );
}

type PokemonCardProps = {
  pokemon: TPokemon;
  onClick: () => void;
  isShiny: boolean;
};
function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  return (
    <Stack borderRadius={5} p={2} m={2}>
      <Box>
        <Heading
          textAlign="center"
          as="h3"
          size={["lg", "xl"]}
          fontWeight="bolder"
          p={2}
          color={"brand.text"}
        >
          {pokemon.displayName}
        </Heading>
      </Box>
      <Box>
        <Text
          textAlign="center"
          fontWeight="bold"
          size={["lg", "xl"]}
          p={2}
          mt={-4}
          color={"brand.primary"}
        >
          {pokemon.genus}
        </Text>
      </Box>
      <Box backgroundColor="brand.accent" borderRadius={5}>
        <Image
          _hover={{ cursor: "pointer" }}
          onClick={props.onClick}
          margin={"auto"}
          src={
            props.isShiny ? pokemon.pictures.shiny : pokemon.pictures.default
          }
          alt={pokemon.name}
        />
      </Box>
      <Box textAlign={"center"}>
        <ListOfTypes list={pokemon.types} />
      </Box>
      <Grid templateColumns={"repeat(2, 1fr)"}>
        <GridItem>
          <PokemonCardTitle title="Generation" />
          <Text
            fontSize={["sm", "md", "md"]}
            fontWeight="medium"
            color={"brand.primary"}
          >
            <Link
              _hover={{ textDecoration: "none" }}
              href={`../../${pokemon.generation.url}`}
            >
              {pokemon.generation.name}
            </Link>
          </Text>
        </GridItem>
        <GridItem>
          <PokemonCardTitle title="Pokedex Entry" />
          <Text
            fontSize={["sm", "md", "md"]}
            fontWeight="medium"
            color={"brand.primary"}
          >
            N° {pokemon.id}
          </Text>
        </GridItem>
      </Grid>
      <Grid templateColumns={"repeat(3, 1fr)"}>
        <GridItem>
          <PokemonCardTitle title="Weight" />
          <PokemonCardValue value={pokemon.weight} />
        </GridItem>
        <GridItem>
          <PokemonCardTitle title="Height" />
          <PokemonCardValue value={pokemon.height} />
        </GridItem>
        <GridItem>
          <PokemonCardTitle title="Experience" />
          <PokemonCardValue value={pokemon.baseExperience} />
        </GridItem>
      </Grid>
    </Stack>
  );
}

function PokemonSection(props: { title: string }) {
  const { title } = props;
  return (
    <Heading display="inline" as="h2" size={["lg", "xl"]} color={"brand.text"}>
      {title}
    </Heading>
  );
}

function PokemonSectionSubtitle(props: { subTitle: string }) {
  const { subTitle } = props;
  return (
    <Text
      color={"brand.primary"}
      fontSize={["sm", "md"]}
      fontWeight="bold"
      mb={1}
      pb={1}
    >
      {subTitle}
    </Text>
  );
}

function PokemonInformation(props: { data: TPokemon }) {
  const { data } = props;
  return (
    <Box textColor={"brand.text"}>
      <Box backgroundColor={"brand.accent"} borderRadius={5} m={4} p={4}>
        <PokemonSection title="Information" />
        <PokemonSectionSubtitle subTitle="Pokémon description from Pokédex" />
        <Text fontWeight={"bold"} fontSize={["sm", "md", "lg"]}>
          {data.description}
        </Text>
      </Box>
      <Box backgroundColor={"brand.accent"} borderRadius={5} m={4} p={4}>
        <PokemonSection title="Stats" />
        <PokemonSectionSubtitle subTitle="Pokémon Base Stats" />
        <Grid marginY={2} templateColumns={"repeat(2, 1fr)"}>
          <PokemonStats stats={data.stats} />
        </Grid>
      </Box>
    </Box>
  );
}

function PokemonStats(props: { stats: TPokemon["stats"] }) {
  const { stats } = props;
  return (
    <>
      {stats.map((stat) => (
        <Box key={stat.name}>
          <Text
            fontSize={["sm", "md", "lg"]}
            fontWeight={"bold"}
            color={"brand.text"}
          >
            {stat.name}
          </Text>
          <Text
            fontSize={["sm", "md", "lg"]}
            fontWeight={"bold"}
            marginY={2}
            color={"brand.primary"}
          >
            {stat.baseStat}
          </Text>
        </Box>
      ))}
    </>
  );
}

function PokemonMoves(props: { data: TPokemon }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} m={4} p={4} borderRadius={5}>
      <PokemonSection title="Moves" />
      <PokemonSectionSubtitle subTitle="Learnable moves" />
      <ListOfMoves list={data.moves} />
    </Box>
  );
}

function PokemonVarieties(props: { data: TPokemon }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} borderRadius={5} m={4} p={4}>
      <PokemonSection title="Varieties" />
      <PokemonSectionSubtitle subTitle="Other varieties of this Pokémon" />
      <ListOfPokemon list={data.varieties} />
    </Box>
  );
}

function PokemonAbilities(props: { data: TPokemon }) {
  const { data } = props;
  return (
    <Box backgroundColor={"brand.accent"} borderRadius={5} m={4} p={4}>
      <PokemonSection title="Abilities" />
      <PokemonSectionSubtitle subTitle="Passive abilities of this Pokémon" />
      <ListOfPokemon list={data.abilities} />
    </Box>
  );
}

function PokemonCardTitle(props: { title: string }) {
  return (
    <Text fontSize={["sm", "md", "md"]} fontWeight="bold" color={"brand.text"}>
      {props.title}
    </Text>
  );
}

function PokemonCardValue(props: { value: number | string }) {
  return (
    <Text
      fontSize={["sm", "md", "md"]}
      fontWeight="bold"
      color={"brand.primary"}
    >
      {props.value}
    </Text>
  );
}
