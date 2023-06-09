import { IUnparsedType, IParsedType } from "../types/pokemonType";
import capitalizeString from "../utils/capitalizeString";
import retrievePathFromUrl from "../utils/retrievePathFromUrl";
import PokemonType from "../entities/pokemonType";

function mapDamage(damage: { name: string; url: string }[]) {
  if (damage.length === 0) {
    return [{ name: "None", url: "" }];
  }
  const damages = damage.map((type) => ({
    name: capitalizeString(type.name),
    url: retrievePathFromUrl(type.url),
  }));
  return damages;
}
export default function mapPokemonType(typeData: IUnparsedType): IParsedType {
  const damages = typeData.damage_relations;
  const damageRelations = {
    doubleDamageFrom: mapDamage(damages.double_damage_from),
    doubleDamageTo: mapDamage(damages.double_damage_to),
    halfDamageFrom: mapDamage(damages.half_damage_from),
    halfDamageTo: mapDamage(damages.half_damage_to),
    noDamageFrom: mapDamage(damages.no_damage_from),
    noDamageTo: mapDamage(damages.no_damage_to),
  };
  const generation = {
    name: capitalizeString(typeData.generation.name),
    url: retrievePathFromUrl(typeData.generation.url),
  };
  const id = typeData.id;

  const moveDamageClass = typeData.move_damage_class
    ? {
        name: capitalizeString(typeData.move_damage_class.name),
        url: retrievePathFromUrl(typeData.move_damage_class.url),
      }
    : { name: "None", url: "" };

  const moves = typeData.moves.map((move) => ({
    name: capitalizeString(move.name),
    url: retrievePathFromUrl(move.url),
  }));
  const name = capitalizeString(typeData.name);
  const pokemon = typeData.pokemon.map((pokemon) => ({
    name: capitalizeString(pokemon.pokemon.name),
    url: retrievePathFromUrl(pokemon.pokemon.url),
  }));
  return new PokemonType({
    damageRelations,
    generation,
    id,
    moveDamageClass,
    moves,
    name,
    pokemon,
  });
}
