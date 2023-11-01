import { useState } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import ListOfMoves from "../../components/ListOfMoves";
import ListOfTypes from "../../components/ListOfTypes";
import ListOfPokemon from "../../components/ListOfPokemon";
import { TPokemon } from "../../types/pokemon";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
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
} from "@chakra-ui/react";

type PokemonCardProps = {
  pokemon: TPokemon;
  onClick: () => void;
  isShiny: boolean;
};

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

function PokemonPageContent(props: {
  data: TPokemon;
  shiny: boolean;
  setShiny: (shiny: boolean) => void;
}) {
  const { data, shiny, setShiny } = props;
  return (
    <Box>
      <Grid justifyContent={"center"}>
        <GridItem>
          <Grid templateColumns={"3fr 1fr"}>
            <PokemonInformation data={data} />
            <PokemonDigest data={data} shiny={shiny} onClick={setShiny} />
          </Grid>
        </GridItem>
        <PokemonVarieties data={data} />
        <PokemonMoves data={data} />
      </Grid>
    </Box>
  );
}

function PokemonDigest(props: {
  data: TPokemon;
  shiny: boolean;
  onClick: (shiny: boolean) => void;
}) {
  const { data, shiny, onClick } = props;
  return (
    <GridItem m={2} p={2} backgroundColor={"brand.background"} borderRadius={5}>
      <PokemonCard
        pokemon={data}
        onClick={() => onClick(!shiny)}
        isShiny={shiny}
      />
    </GridItem>
  );
}

function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  return (
    <Stack>
      <Box>
        <Heading textAlign="center" as="h3" size="lg" fontWeight="bolder" p={2}>
          {pokemon.displayName}
        </Heading>
      </Box>
      <Box>
        <Text textAlign="center" fontWeight="bold" p={2} mt={-4}>
          {pokemon.genus}
        </Text>
      </Box>
      <Box>
        <Image
          _hover={{ cursor: "pointer" }}
          onClick={props.onClick}
          p={2}
          boxSize="250px"
          margin="auto"
          borderRadius={10}
          backgroundColor="gray.300"
          src={
            props.isShiny ? pokemon.pictures.shiny : pokemon.pictures.default
          }
          alt={pokemon.name}
        />
      </Box>
      <Box>
        <Grid templateColumns="repeat(2, 1fr)">
          <ListOfTypes list={pokemon.types} />
        </Grid>
      </Box>

      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Generation
        </Text>
        <Text fontSize="md" fontWeight="medium">
          <Link href={`../../${pokemon.generation.url}`}>
            {pokemon.generation.name}
          </Link>
        </Text>
      </Box>

      <Box>
        <Text fontSize="xl" fontWeight="bold">
          National Pokedex Entry
        </Text>
        <Text fontSize="md" fontWeight="medium">
          N° {pokemon.id}
        </Text>
      </Box>

      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Abilities
        </Text>
        <HStack fontSize="md" fontWeight="medium">
          {pokemon.abilities.map((ability) => (
            <Link key={ability.name} href={`../../${ability.url}`}>
              {ability.name}
            </Link>
          ))}
        </HStack>
      </Box>
    </Stack>
  );
}

function PokemonSection(props: { title: string }) {
  const { title } = props;
  return (
    <Heading display="inline" borderBottom="5px solid white" as="h2" size="xl">
      {title}
    </Heading>
  );
}

function PokemonSectionSubtitle(props: { subTitle: string }) {
  const { subTitle } = props;
  return (
    <Text
      color={"brand.accent"}
      size="md"
      fontWeight={600}
      paddingY={2}
      marginY={2}
    >
      {subTitle}
    </Text>
  );
}

function BoldedText(props: { text: string }) {
  const { text } = props;
  return (
    <Heading as="h3" size="md" fontWeight={600}>
      {text}
    </Heading>
  );
}

function PokemonInformation(props: { data: TPokemon }) {
  const { data } = props;
  return (
    <GridItem m={2} p={2} backgroundColor={"brand.backg"} borderRadius={5}>
      <PokemonSection title="Information" />
      <PokemonSectionSubtitle subTitle="Pokémon description from Pokédex" />
      <Text marginY={1} fontSize={"2xl"}>
        {data.description}
      </Text>
      <Grid marginY={4} templateColumns={"repeat(3, 0.2fr)"}>
        <GridItem>
          <BoldedText text="Weight" />
          <Text fontWeight={600} p={2}>
            {data.weight}
          </Text>
        </GridItem>
        <GridItem>
          <BoldedText text="Height" />
          <Text fontWeight={600} p={2}>
            {data.height}
          </Text>
        </GridItem>
        <GridItem>
          <BoldedText text="Base Experience" />
          <Text fontWeight={600} p={2}>
            {data.baseExperience}
          </Text>
        </GridItem>
      </Grid>
      <PokemonSection title="Stats" />
      <PokemonSectionSubtitle subTitle="Pokémon Base Stats" />
      <Grid templateColumns={"repeat(2, 0.3fr)"}>
        <PokemonStats stats={data.stats} />
      </Grid>
    </GridItem>
  );
}

function PokemonStats(props: { stats: TPokemon["stats"] }) {
  const { stats } = props;
  return (
    <>
      {stats.map((stat) => (
        <Box key={stat.name}>
          <BoldedText text={stat.name} />
          <Text size="md" fontWeight={600} paddingY={2} marginY={2}>
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
    <GridItem m={2} p={2} backgroundColor={"brand.backg"} borderRadius={5}>
      <PokemonSection title="Moves" />
      <PokemonSectionSubtitle subTitle="Learnable moves" />
      <ListOfMoves list={data.moves} />
    </GridItem>
  );
}

function PokemonVarieties(props: { data: TPokemon }) {
  const { data } = props;
  return (
    <GridItem m={2} p={2} backgroundColor={"brand.backg"} borderRadius={5}>
      <PokemonSection title="Varieties" />
      <PokemonSectionSubtitle subTitle="Other varieties of this Pokémon" />
      <ListOfPokemon list={data.varieties} />
    </GridItem>
  );
}
