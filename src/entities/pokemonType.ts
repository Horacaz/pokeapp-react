import { IParsedType, ParsedDamageRelations } from "../types/pokemonType";

export default class PokemonType implements IParsedType {
  damageRelation: ParsedDamageRelations;
  generation: { name: string; url: string };
  id: number;
  moveDamageClass: { name: string; url: string };
  moves: { name: string; url: string }[];
  name: string;
  pokemon: { name: string; url: string }[];

  constructor(typeData: IParsedType) {
    this.damageRelation = typeData.damageRelation;
    this.generation = typeData.generation;
    this.id = typeData.id;
    this.moveDamageClass = typeData.moveDamageClass;
    this.moves = typeData.moves;
    this.name = typeData.name;
    this.pokemon = typeData.pokemon;
  }
}
