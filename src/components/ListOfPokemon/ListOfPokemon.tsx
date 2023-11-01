import { Button, Link, Grid } from "@chakra-ui/react";

type Pokemon = {
  name: string;
  url: string;
};

export default function ListOfPokemon({ list }: { list: Pokemon[] }) {
  return (
    <Grid gridTemplateColumns="repeat(6, 1fr)" gap={2}>
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
      fontWeight="bold"
      m={1}
      p={2}
      backgroundColor={"brand.secondary"}
      variant="solid"
    >
      <Link color={"brand.background"} href={`../../${props.url}`}>
        {props.name}
      </Link>
    </Button>
  );
}
