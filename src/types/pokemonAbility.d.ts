interface AbilityEffect {
  effect: string;
  language: {
    name: string;
    url: string;
  };
  short_effect: string;
}

interface SharedAbilityPokemon {
  pokemon: {
    name: string;
    url: string;
  };
}

export interface IUnparsedPokemonAbility {
  effect_entries: AbilityEffect[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  name: string;
  pokemon: SharedAbilityPokemon[];
}

export interface IParsedPokemonAbility {
  ability: { description: string; effect: string };
  generation: { name: string; url: string };
  id: number;
  displayName: string;
  pokemon: { name: string; url: string }[];
}
