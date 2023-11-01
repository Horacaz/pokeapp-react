export interface IUnparsedPokemonList {
  count: number;
  next: string;
  results: { name: string; url: string }[];
}

export interface IParsedPokemonList {
  count: number;
  next: string;
  results: { name: string; url: string }[];
}
