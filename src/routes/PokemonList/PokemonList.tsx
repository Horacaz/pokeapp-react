import { Container, Heading, Text } from "@chakra-ui/react";
import usePokemonList from "../../hooks/usePokemonList";
import { useState } from "react";
import { IParsedPokemonList } from "../../types/pokemonList";
import {
  Loading,
  ErrorMessage,
  ListOfPokemon,
  Paginator,
} from "../../components";

export default function PokemonList() {
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = usePokemonList(offset);

  if (loading) return <Loading isLoading={loading} />;

  if (error) return <ErrorMessage />;

  if (data)
    return (
      <PokemonListContent data={data} offset={offset} setOffset={setOffset} />
    );
}

function PokemonListContent(props: {
  data: IParsedPokemonList;
  offset: number;
  setOffset: (offset: number) => void;
}) {
  const { data, offset, setOffset } = props;
  return (
    <Container m={2} p={2} maxW={"85vw"}>
      <Heading as="h2" mb={4}>
        Currently Available Pokemon{" "}
        <Text as="span" color="gray.500">
          {data.count}
        </Text>
      </Heading>
      <ListOfPokemon list={data.results} />
      <Paginator maxPages={Math.floor(data.count / 20)} pagesPerPage={5} />
    </Container>
  );
}
