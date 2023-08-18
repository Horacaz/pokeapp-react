import { Button, Link, Grid } from "@chakra-ui/react";

type PokemonList = {
  name: string;
  url: string;
}[];

export default function ListOfPokemon({ list }: { list: PokemonList }) {
  return (
    <Grid gridTemplateColumns="repeat(6, 1fr)" gap={2}>
      {list.map((pokemon, i) => (
        <Button
          fontWeight="bold"
          m={1}
          p={2}
          colorScheme="teal"
          variant="solid"
          key={`${pokemon.name}-${i}`}
        >
          <Link href={`../../${pokemon.url}`}>{pokemon.name}</Link>
        </Button>
      ))}
    </Grid>
  );
}
