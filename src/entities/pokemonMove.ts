import { IParsedPokemonMove } from "../types/pokemonMove";
export default class PokemonMove implements IParsedPokemonMove {
  accuracy: number;
  damageClass: string;
  effectChance: number | null;
  effect: string;
  description: string;
  generation: { name: string; url: string };
  id: number;
  learnedBy: { name: string; url: string }[];
  name: string;
  power: number;
  pp: number;
  type: { name: string; url: string };
  constructor(moveData: IParsedPokemonMove) {
    this.accuracy = moveData.accuracy;
    this.damageClass = moveData.damageClass;
    this.effectChance = moveData.effectChance;
    this.effect = moveData.effect;
    this.description = moveData.description;
    this.generation = moveData.generation;
    this.id = moveData.id;
    this.learnedBy = moveData.learnedBy;
    this.name = moveData.name;
    this.power = moveData.power;
    this.pp = moveData.pp;
    this.type = moveData.type;
  }
}
