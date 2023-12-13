import { useState } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";

import { TPokemon } from "../../types/pokemon";
import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  Stack,
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
        m={4}
      >
        <GridItem
          order={[2, 2, 1]}
          backgroundColor={"brand.accent"}
          borderRadius={5}
        >
          <PokemonInformation data={data} />
          <PokemonAbilities data={data} />
          <PokemonVarieties data={data} />
        </GridItem>
        <GridItem
          order={[1, 1, 2]}
          backgroundColor={"brand.accent"}
          borderRadius={5}
        >
          <PokemonDigest data={data} shiny={shiny} onClick={setShiny} />
        </GridItem>
      </Grid>
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
    <Box m={4} p={4}>
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
      <Grid templateColumns={"repeat(1, 1fr)"}>
        <ListOfTypes list={pokemon.types} />
      </Grid>
      <Box>
        <Grid templateColumns={"repeat(1, 1fr)"}>
          <Box>
            <PokemonCardItem
              itemTitle="Generation"
              spanValue={pokemon.generation.name}
            />
          </Box>

          <Box>
            <PokemonCardItem
              itemTitle="Pokedex Entry N°"
              spanValue={pokemon.id}
            />
          </Box>

          <Box>
            <PokemonCardItem
              itemTitle="Weight"
              spanValue={`${pokemon.weight} kg`}
            />
          </Box>
          <Box>
            <PokemonCardItem
              itemTitle="Height"
              spanValue={`${pokemon.height} m`}
            />
          </Box>
          <Box>
            <PokemonCardItem
              itemTitle="Base Experience"
              spanValue={pokemon.baseExperience}
            />
          </Box>
        </Grid>
      </Box>
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
      <Box m={4}>
        <PokemonSection title="Information" />
        <PokemonSectionSubtitle subTitle="Pokémon description from Pokédex" />
        <Text fontWeight={"bold"} fontSize={["sm", "md", "lg"]}>
          {data.description}
        </Text>
      </Box>
      <Box m={4}>
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
    <Box m={4}>
      <PokemonSection title="Varieties" />
      <PokemonSectionSubtitle subTitle="Other varieties of this Pokémon" />
      <ListOfPokemon list={data.varieties} />
    </Box>
  );
}

function PokemonAbilities(props: { data: TPokemon }) {
  const { data } = props;
  return (
    <Box m={4}>
      <PokemonSection title="Abilities" />
      <PokemonSectionSubtitle subTitle="Passive abilities of this Pokémon" />
      <ListOfPokemon list={data.abilities} />
    </Box>
  );
}

function PokemonCardItem(props: {
  itemTitle: string;
  spanValue: string | number;
}) {
  return (
    <Text
      p={2}
      borderRadius={5}
      fontSize={["sm", "md", "lg"]}
      fontWeight="bold"
      color={"brand.text"}
    >
      {props.itemTitle}{" "}
      <Text
        as={"span"}
        fontSize={["sm", "md", "lg"]}
        fontWeight="bold"
        color={"brand.primary"}
      >
        {props.spanValue}
      </Text>
    </Text>
  );
}

/* 

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
*/
