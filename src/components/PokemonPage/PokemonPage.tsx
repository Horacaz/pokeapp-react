import useGetPokemon from "../../hooks/useGetPokemon";
import ListOfMoves from "../ListOfMoves/ListOfMoves";
import ListOfTypes from "../ListOfTypes/ListOfTypes";
import ListOfPokemon from "../ListOfPokemon/ListOfPokemon";
import { TPokemon } from "../../types/pokemon";
import {
  Box,
  Heading,
  Text,
  Spinner,
  Image,
  Link,
  Grid,
  GridItem,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
export default function PokemonPage() {
  const id = useParams().id as string;
  const { loading, data } = useGetPokemon(id);
  return (
    <Box backgroundColor={"gray.500"} p={8} marginX={20} marginY={4}>
      {loading && <LoadingSpinner />}
      {data && (
        <Grid justifyContent={"center"}>
          <GridItem>
            <Grid templateColumns={"3fr 1fr"}>
              <GridItem>
                <PokemonSection title="Information" />
                <PokemonSectionSubtitle subTitle="Pokémon description from Pokédex" />
                <Text marginY={1} fontSize={"xl"}>
                  Spits fire that is hot enough to melt boulders. <br></br>Known
                  to cause forest fires unintentionally.
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
              <GridItem>
                <PokemonCard pokemon={data} />
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem>
            <PokemonSection title="Varieties" />
            <PokemonSectionSubtitle subTitle="Other varieties of this Pokémon" />
            <ListOfPokemon list={data.varieties} />
          </GridItem>

          <GridItem>
            <PokemonSection title="Moves" />
            <PokemonSectionSubtitle subTitle="Learnable moves" />
            <ListOfMoves list={data.moves} />
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}

function PokemonCard(props: { pokemon: TPokemon }) {
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
          p={2}
          boxSize="250px"
          margin="auto"
          borderRadius={10}
          backgroundColor="gray.300"
          src={pokemon.pictures.default}
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
    <Heading display="inline" borderBottom="5px solid black" as="h2" size="xl">
      {title}
    </Heading>
  );
}

function PokemonSectionSubtitle(props: { subTitle: string }) {
  const { subTitle } = props;
  return (
    <Text size="md" fontWeight={600} paddingY={2} marginY={2}>
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

function LoadingSpinner() {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
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
