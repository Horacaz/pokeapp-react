import { Button, Link } from "@chakra-ui/react";

type PokemonList = {
  name: string;
  url: string;
}[];

export default function ListOfPokemon({ list }: { list: PokemonList }) {
  return (
    <>
      {list.map((pokemon, i) => (
        <Button
          m={1}
          colorScheme="teal"
          variant="solid"
          key={`${pokemon.name}-${i}`}
        >
          <Link href={`../${pokemon.url}`}>{pokemon.name}</Link>
        </Button>
      ))}
    </>
  );
}
