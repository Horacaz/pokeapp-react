import { IUnparsedPokemonMove, IParsedPokemonMove } from "../types/pokemonMove";
import capitalizeString from "../utils/capitalizeString";
import capitalizeGeneration from "../utils/capitalizeGeneration";
import retrievePathFromUrl from "../utils/retrievePathFromUrl";
import PokemonMove from "../entities/pokemonMove";

export default function mapPokemonMove(
  moveData: IUnparsedPokemonMove
): IParsedPokemonMove {
  const accuracy = moveData.accuracy;
  const damageClass = capitalizeString(moveData.damage_class.name);
  const effectChance = moveData.effect_chance || null;

  const effectFilter = moveData.effect_entries.filter(
    (effect) => effect.language.name === "en"
  )[0];
  const effect = capitalizeString(effectFilter.effect);
  const descriptionFilter = moveData.flavor_text_entries.filter(
    (effect) => effect.language.name === "en"
  )[0];
  const description = capitalizeString(descriptionFilter.flavor_text);
  const generation = {
    name: capitalizeGeneration(moveData.generation.name),
    url: retrievePathFromUrl(moveData.generation.url),
  };
  const id = moveData.id;
  const learnedBy = moveData.learned_by_pokemon.map((pokemon) => ({
    name: capitalizeString(pokemon.name),
    url: retrievePathFromUrl(pokemon.url),
  }));
  const name = capitalizeString(moveData.name);
  const power = moveData.power;
  const pp = moveData.pp;
  const type = [
    {
      name: capitalizeString(moveData.type.name),
      url: retrievePathFromUrl(moveData.type.url),
    },
  ];

  return new PokemonMove({
    accuracy,
    damageClass,
    effectChance,
    effect,
    description,
    generation,
    id,
    learnedBy,
    name,
    power,
    pp,
    type,
  });
}
