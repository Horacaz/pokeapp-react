export interface IUnparsedPokemonSpecies {
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string; url: string };
  }[];
  genera: { genus: string; language: { name: string; url: string } }[];
  generation: { name: string; url: string };
  id: number;
  name: string;
  varieties: { pokemon: { name: string; url: string } }[];
}

export interface IParsedPokemonSpecies {
  description: string;
  genus: string;
  generation: { name: string; url: string };
  id: number;
  name: string;
  varieties: { name: string; url: string }[];
}
