interface DamageRelations {
  double_damage_from: { name: string; url: string }[] | [];
  double_damage_to: { name: string; url: string }[] | [];
  half_damage_from: { name: string; url: string }[] | [];
  half_damage_to: { name: string; url: string }[] | [];
  no_damage_from: { name: string; url: string }[] | [];
  no_damage_to: { name: string; url: string }[] | [];
}
interface Pokemon {
  pokemon: { name: string; url: string };
}

export interface ParsedDamageRelations {
  doubleDamageFrom: { name: string; url: string }[] | [];
  doubleDamageTo: { name: string; url: string }[] | [];
  halfDamageFrom: { name: string; url: string }[] | [];
  halfDamageTo: { name: string; url: string }[] | [];
  noDamageFrom: { name: string; url: string }[] | [];
  noDamageTo: { name: string; url: string }[] | [];
}
export interface IUnparsedType {
  damage_relation: DamageRelations;
  generation: { name: string; url: string };
  id: number;
  move_damage_class: { name: string; url: string };
  moves: { name: string; url: string }[];
  name: string;
  pokemon: Pokemon[];
}

export interface IParsedType {
  damageRelation: ParsedDamageRelations;
  generation: { name: string; url: string };
  id: number;
  moveDamageClass: { name: string; url: string };
  moves: { name: string; url: string }[];
  name: string;
  pokemon: { name: string; url: string }[];
}
