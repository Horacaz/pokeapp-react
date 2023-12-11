import { IUnparsedPokemonList, IParsedPokemonList } from "../types/pokemonList";
import PokemonList from "../entities/pokemonList";
import capitalizeString from "../utils/capitalizeString";
import retrievePathFromUrl from "../utils/retrievePathFromUrl";

export default function mapPokemonList(
  pokemonList: IUnparsedPokemonList
): IParsedPokemonList {
  const count = pokemonList.count;
  const next = pokemonList.next;
  const results = pokemonList.results.map((pokemon) => ({
    name: capitalizeString(pokemon.name),
    url: retrievePathFromUrl(pokemon.url),
  }));
  return new PokemonList({ count, next, results });
}
