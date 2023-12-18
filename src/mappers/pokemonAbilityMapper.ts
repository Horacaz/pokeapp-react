import {
  IUnparsedPokemonAbility,
  IParsedPokemonAbility,
} from "../types/pokemonAbility";
import capitalizeString from "../utils/capitalizeString";
import capitalizeGeneration from "../utils/capitalizeGeneration";
import retrievePathFromUrl from "../utils/retrievePathFromUrl";
import PokemonAbility from "../entities/pokemonAbility";

export default function mapPokemonAbility(
  pokemonAbilityData: IUnparsedPokemonAbility
): IParsedPokemonAbility {
  const abilityEntries = pokemonAbilityData.effect_entries.filter(
    (effect) => effect.language.name === "en"
  )[0];
  const ability = {
    description: abilityEntries.effect,
    effect: abilityEntries.short_effect,
  };
  const generation = {
    name: capitalizeGeneration(pokemonAbilityData.generation.name),
    url: retrievePathFromUrl(pokemonAbilityData.generation.url),
  };
  const id = pokemonAbilityData.id;
  const displayName = capitalizeString(pokemonAbilityData.name);
  const pokemon = pokemonAbilityData.pokemon.map((pokemon) => ({
    name: capitalizeString(pokemon.pokemon.name),
    url: retrievePathFromUrl(pokemon.pokemon.url),
  }));
  return new PokemonAbility({ ability, generation, id, displayName, pokemon });
}
