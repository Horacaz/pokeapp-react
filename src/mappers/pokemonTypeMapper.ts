import { IUnparsedType, IParsedType } from "../types/pokemonType";
import capitalizeString from "../utils/capitalizeString";
import PokemonType from "../entities/pokemonType";

function mapDamage(damage: { name: string; url: string }[]) {
  const damages = damage.map((type) => ({
    name: capitalizeString(type.name),
    url: type.url,
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
    url: typeData.generation.url,
  };
  const id = typeData.id;
  const moveDamageClass = {
    name: capitalizeString(typeData.move_damage_class.name),
    url: typeData.move_damage_class.url,
  };
  const moves = typeData.moves.map((move) => ({
    name: capitalizeString(move.name),
    url: move.url,
  }));
  const name = capitalizeString(typeData.name);
  const pokemon = typeData.pokemon.map((pokemon) => ({
    name: capitalizeString(pokemon.pokemon.name),
    url: pokemon.pokemon.url,
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
