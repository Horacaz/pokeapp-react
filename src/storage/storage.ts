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

export function getPokemon(searchQuery: string | number): IParsedPokemon {
  if (typeof searchQuery !== "string" && typeof searchQuery !== "number") {
    throw new Error(`The pokemon search query must be a string or number`);
  }

  function returnPokemonKey(query: string | number): string | null {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string;
      if (key.startsWith("pokemon-") && key.includes(query.toString())) {
        return key;
      }
    }
    return null;
  }

  const pokemonData = returnPokemonKey(searchQuery);

  if (pokemonData === null) {
    throw new Error(
      `No pokemon with the following search query ${searchQuery} was found in local storage`
    );
  }
  return JSON.parse(localStorage.getItem(pokemonData) as string);
}

export function savePokemon(pokemon: IParsedPokemon) {
  const saveQuery = `pokemon-${pokemon.name}-${pokemon.id}`;
  localStorage.setItem(saveQuery, JSON.stringify(pokemon));
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

export function getPokemonSpecies(speciesId: number): IParsedPokemonSpecies {
  if (typeof speciesId !== "number")
    throw new Error(`The species id must be a number`);
  const query = `species-${speciesId}`;
  const pokemonSpecies = localStorage.getItem(query);
  if (pokemonSpecies === null)
    throw new Error(
      `No pokemon species with id ${speciesId} was found in local storage`
    );
  return JSON.parse(pokemonSpecies);
}

export function savePokemonSpecies(pokemonSpecies: IParsedPokemonSpecies) {
  localStorage.setItem(
    `species-${pokemonSpecies.id}`,
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

export function getPokemonAbility(
  abilityQuery: string | number
): IParsedPokemonAbility {
  if (typeof abilityQuery !== "string" && typeof abilityQuery !== "number") {
    throw new Error(`The ability search query must be a string or number`);
  }

  function returnAbilityKey(query: string | number): string | null {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string;
      if (key.startsWith("ability-") && key.includes(query.toString())) {
        return key;
      }
    }
    return null;
  }

  const abilityData = returnAbilityKey(abilityQuery);

  if (abilityData === null) {
    throw new Error(
      `No pokemon with the following search query ${abilityQuery} was found in local storage`
    );
  }

  return JSON.parse(localStorage.getItem(abilityData) as string);
}

export function savePokemonAbility(pokemonAbility: IParsedPokemonAbility) {
  const saveQuery = `ability-${pokemonAbility.displayName.toLowerCase()}-${
    pokemonAbility.id
  }`;
  localStorage.setItem(saveQuery, JSON.stringify(pokemonAbility));
}
