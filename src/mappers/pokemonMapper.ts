import { IUnparsedPokemon, IParsedPokemon } from "../types/pokemon";
import Pokemon from "../entities/pokemon";
import capitalizeString from "../utils/capitalizeString";

export default function mapPokemon(
  pokemonData: IUnparsedPokemon
): IParsedPokemon {
  const displayName = capitalizeString(pokemonData.name);
  const abilities = pokemonData.abilities.map((ability) => ({
    name: capitalizeString(ability.ability.name),
    url: ability.ability.url,
  }));
  const baseExperience = pokemonData.base_experience;
  const height = pokemonData.height;
  const id = pokemonData.id;
  const moves = pokemonData.moves.map((move) => ({
    name: capitalizeString(move.move.name),
    url: move.move.url,
  }));
  const name = pokemonData.name;
  const species = pokemonData.species;
  const pictures = {
    default: pokemonData.sprites.other["official-artwork"].front_default,
    shiny: pokemonData.sprites.other["official-artwork"].front_shiny,
  };
  const stats = pokemonData.stats.map((stat) => ({
    baseStat: stat.base_stat,
    name: stat.stat.name,
  }));
  const types = pokemonData.types.map((type) => ({
    name: capitalizeString(type.type.name),
    url: type.type.url,
  }));
  const weight = pokemonData.weight;
  return new Pokemon({
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
  });
}
