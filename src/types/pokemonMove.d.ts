export interface IUnparsedPokemonMove {
  accuracy: number;
  damage_class: { name: string };
  effect_chance: number | null;
  effect_entries: { effect: string; language: { name: string } }[];
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  generation: { name: string; url: string };
  id: number;
  learned_by_pokemon: { name: string; url: string }[];
  name: string;
  power: number;
  pp: number;
  type: { name: string; url: string };
}

export interface IParsedPokemonMove {
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
  type: { name: string; url: string }[];
}
