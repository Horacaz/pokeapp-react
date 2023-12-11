import { IUnparsedPokemon, IParsedPokemon } from "../types/pokemon";
import retrievePathFromUrl from "../utils/retrievePathFromUrl";
import capitalizeString from "../utils/capitalizeString";

export default function mapPokemon(
  pokemonData: IUnparsedPokemon
): IParsedPokemon {
  const displayName = capitalizeString(pokemonData.name);
  const abilities = pokemonData.abilities.map((ability) => ({
    name: capitalizeString(ability.ability.name),
    url: retrievePathFromUrl(ability.ability.url),
  }));
  const baseExperience = pokemonData.base_experience;
  const height = pokemonData.height / 10;
  const id = pokemonData.id;
  const moves = pokemonData.moves.map((move) => ({
    name: capitalizeString(move.move.name),
    url: retrievePathFromUrl(move.move.url),
  }));
  const name = pokemonData.name;
  const species = pokemonData.species;
  const pictures = {
    default: pokemonData.sprites.other["official-artwork"].front_default,
    shiny: pokemonData.sprites.other["official-artwork"].front_shiny,
  };
  const stats = pokemonData.stats.map((stat) => ({
    baseStat: stat.base_stat,
    name: capitalizeString(stat.stat.name),
  }));
  const types = pokemonData.types.map((type) => ({
    name: capitalizeString(type.type.name),
    url: retrievePathFromUrl(type.type.url),
  }));
  const weight = pokemonData.weight / 10;
  return {
    displayName,
    abilities,
    baseExperience,
    height,
    id,
    moves,
    name,
    species,
    pictures,
    stats,
    types,
    weight,
  };
}
