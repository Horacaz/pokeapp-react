import { Button } from "@chakra-ui/react";

type PokemonList = {
  name: string;
  url: string;
}[];

export default function ListOfPokemon({ list }: { list: PokemonList }) {
  return (
    <>
      {list.map((pokemon, i) => (
        <Button key={`${pokemon.name}-${i}`}>{pokemon.name}</Button>
      ))}
    </>
  );
}
