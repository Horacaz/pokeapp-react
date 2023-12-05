import { Button, Link, Grid } from "@chakra-ui/react";

type Pokemon = {
  name: string;
  url: string;
};

export default function ListOfPokemon({ list }: { list: Pokemon[] }) {
  return (
    <Grid gridTemplateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={1}>
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
    <Link whiteSpace={"normal"} href={`../../${props.url}`}>
      <Button
        _hover={{ bg: "brand.background", color: "brand.primary" }}
        fontWeight="bold"
        backgroundColor={"brand.secondary"}
        color={"brand.background"}
        variant="solid"
        fontSize={["xs", "sm"]}
        width="100%"
      >
        {props.name}
      </Button>
    </Link>
  );
}
