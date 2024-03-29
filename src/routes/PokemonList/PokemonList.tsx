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
  Footer,
} from "../../components";

export default function PokemonList() {
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = usePokemonList(offset);
  const [currentPage, setCurrentPage] = useState(1);
  const offSetIncrement = 24;

  useEffect(() => {
    setOffset((currentPage - 1) * offSetIncrement);
  }, [currentPage]);

  if (loading) return <Loading />;

  if (error) return <ErrorMessage error={error} />;

  if (data)
    return (
      <>
        <PokemonListContent
          data={data}
          offSetIncrement={offSetIncrement}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <Footer />
      </>
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
    <Container maxW={["100vw", "90vw"]} textAlign={"center"}>
      <Heading as="h2" mb={4} color="brand.text" fontSize={["lg", "xl", "2xl"]}>
        Currently Available Pokemon{" "}
        <Text as="span" color="brand.primary">
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
