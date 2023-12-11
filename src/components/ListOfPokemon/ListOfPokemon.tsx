import { Button, Link, Grid } from "@chakra-ui/react";

type Pokemon = {
  name: string;
  url: string;
};

export default function ListOfPokemon({ list }: { list: Pokemon[] }) {
  return (
    <Grid gridTemplateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={2}>
      {list.map((pokemon, i) => (
        <PokemonButton
          name={pokemon.name}
          url={pokemon.url}
          key={`${pokemon.name}-${i}`}
        />
      ))}
    </Grid>
  );
}

function PokemonButton(props: Pokemon) {
  return (
    <Button
      as={Link}
      href={`../../${props.url}`}
      _hover={{
        bg: "brand.primary",
        color: "brand.text",
        textDecoration: "none",
      }}
      fontWeight="bold"
      backgroundColor="brand.secondary"
      color="brand.background"
      variant="solid"
      fontSize={["xs", "sm", "md"]}
      width="100%"
      whiteSpace="normal"
      textAlign={"center"}
    >
      {props.name}
    </Button>
  );
}
