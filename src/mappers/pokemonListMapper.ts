import { IUnparsedPokemonList, IParsedPokemonList } from "../types/pokemonList";
import PokemonList from "../entities/pokemonList";
import capitalizeString from "../utils/capitalizeString";

export default function mapPokemonList(
  pokemonList: IUnparsedPokemonList
): IParsedPokemonList {
  const count = pokemonList.count;
  const next = pokemonList.next;
  const results = pokemonList.results.map((pokemon) => ({
    displayName: capitalizeString(pokemon.name),
    name: pokemon.name,
    url: pokemon.url,
  }));
  return new PokemonList({ count, next, results });
}
