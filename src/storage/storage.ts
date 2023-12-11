import { IParsedGeneration } from "../types/generation";
import { IParsedPokemon } from "../types/pokemon";
import { IParsedPokemonSpecies } from "../types/pokemonSpecies";
import { IParsedPokemonAbility } from "../types/pokemonAbility";
import { IParsedPokemonMove } from "../types/pokemonMove";
import { IParsedType } from "../types/pokemonType";
import { IParsedPokemonList } from "../types/pokemonList";

export function getPokemonList(offSet: number): IParsedPokemonList {
  if (typeof offSet !== "number")
    throw new Error(`The offset provided must be a number`);
  const query = `list-${offSet}`;
  const pokemonList = localStorage.getItem(query);
  if (pokemonList === null)
    throw new Error(`No pokemon list found in local storage`);
  return JSON.parse(pokemonList);
}

type PokemonList = {
  offset: number;
  pokemonList: IParsedPokemonList;
};

export function savePokemonList({ offset, pokemonList }: PokemonList) {
  localStorage.setItem(`list-${offset}`, JSON.stringify(pokemonList));
}

export function getPokemon(pokemonName: string): IParsedPokemon {
  if (typeof pokemonName !== "string")
    throw new Error(`The pokemon name must be a string`);
  const query = pokemonName;
  const pokemon = localStorage.getItem(query);
  if (pokemon === null)
    throw new Error(
      `No pokemon with name ${pokemonName} was found in local storage`
    );
  return JSON.parse(pokemon);
}

export function savePokemon(pokemon: IParsedPokemon) {
  localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
}

export function getPokemonTypes(typeID: number): IParsedType {
  if (typeof typeID !== "number")
    throw new Error(`The type id must be a number`);
  const query = `type-${typeID}`;
  const type = localStorage.getItem(query);
  if (type === null)
    throw new Error(`No type with id ${typeID} was found in local storage`);
  return JSON.parse(type);
}

export function savePokemonTypes(pokemonType: IParsedType) {
  localStorage.setItem(`type-${pokemonType.id}`, JSON.stringify(pokemonType));
}

export function getPokemonSpecies(speciesName: string): IParsedPokemonSpecies {
  if (typeof speciesName !== "string")
    throw new Error(`The species name must be a string`);
  const query = `species-${speciesName}`;
  const pokemonSpecies = localStorage.getItem(query);
  if (pokemonSpecies === null)
    throw new Error(
      `No pokemon species with name ${speciesName} was found in local storage`
    );
  return JSON.parse(pokemonSpecies);
}

export function savePokemonSpecies(pokemonSpecies: IParsedPokemonSpecies) {
  localStorage.setItem(
    `species-${pokemonSpecies.name}`,
    JSON.stringify(pokemonSpecies)
  );
}

export function getGeneration(generationId: number): IParsedGeneration {
  if (typeof generationId !== "number")
    throw new Error(`The generation id must be a number`);
  const query = `generation-${generationId}`;
  const generation = localStorage.getItem(query);
  if (generation === null)
    throw new Error(
      `No generation with id ${generationId} was found in local storage`
    );
  return JSON.parse(generation);
}

export function saveGeneration(generation: IParsedGeneration) {
  localStorage.setItem(
    `generation-${generation.id}`,
    JSON.stringify(generation)
  );
}

export function getPokemonMoves(moveId: number): IParsedPokemonMove {
  if (typeof moveId !== "number")
    throw new Error(`The move id must be a number`);
  const query = `move-${moveId}`;
  const move = localStorage.getItem(query);
  if (move === null)
    throw new Error(`No move with id ${moveId} was found in local storage`);
  return JSON.parse(move);
}

export function savePokemonMoves(move: IParsedPokemonMove) {
  localStorage.setItem(`move-${move.id}`, JSON.stringify(move));
}

export function getPokemonAbility(abilityId: string): IParsedPokemonAbility {
  if (typeof abilityId !== "string")
    throw new Error(`The ability id must be a string`);
  const query = `ability-${abilityId}`;
  const ability = localStorage.getItem(query);
  if (ability === null)
    throw new Error(
      `No ability with id ${abilityId} was found in local storage`
    );
  return JSON.parse(ability);
}

export function savePokemonAbility(pokemonAbility: IParsedPokemonAbility) {
  localStorage.setItem(
    `ability-${pokemonAbility.id}`,
    JSON.stringify(pokemonAbility)
  );
}
