import { useEffect } from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const offSetIncrement = 20;

  useEffect(() => {
    setOffset((currentPage - 1) * offSetIncrement);
  }, [currentPage]);

  if (loading) return <Loading isLoading={loading} />;

  if (error) return <ErrorMessage />;

  if (data)
    return (
      <PokemonListContent
        data={data}
        offSetIncrement={offSetIncrement}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
}

function PokemonListContent(props: {
  data: IParsedPokemonList;
  offSetIncrement: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  const { data, offSetIncrement, currentPage, setCurrentPage } = props;
  const maxPages = Math.floor(data.count / offSetIncrement);
  return (
    <Container maxW={["100vw", "90vw"]}>
      <Heading as="h2" mb={4} color="brand.text" fontSize={"2xl"}>
        Currently Available Pokemon{" "}
        <Text as="span" color="brand.accent">
          {data.count}
        </Text>
      </Heading>
      <Box display={"flex"} flexDir={"column"}>
        <Box p={2} justifyContent={"center"}>
          <ListOfPokemon list={data.results} />
        </Box>
        <Box p={2} display={"flex"} justifyContent={"center"}>
          <Paginator
            maxPages={maxPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Box>
      </Box>
    </Container>
  );
}
