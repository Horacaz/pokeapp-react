import {
  IUnparsedPokemonSpecies,
  IParsedPokemonSpecies,
} from "../types/pokemonSpecies";
import capitalizeString from "../utils/capitalizeString";
import capitalizeGeneration from "../utils/capitalizeGeneration";
import retrievePathFromUrl from "../utils/retrievePathFromUrl";
import PokemonSpecies from "../entities/pokemonSpecies";

export default function mapPokemonSpecies(
  speciesData: IUnparsedPokemonSpecies
): IParsedPokemonSpecies {
  const filteredDescription = speciesData.flavor_text_entries.filter(
    (text) => text.language.name === "en"
  )[0];
  const description = capitalizeString(filteredDescription.flavor_text);

  const filteredGenus = speciesData.genera.filter(
    (genus) => genus.language.name === "en"
  )[0];
  const genus = capitalizeString(filteredGenus.genus);

  const generation = {
    name: capitalizeGeneration(speciesData.generation.name),
    url: retrievePathFromUrl(speciesData.generation.url),
  };
  const id = speciesData.id;
  const name = capitalizeString(speciesData.name);
  const varieties = speciesData.varieties.map((variety) => ({
    name: capitalizeString(variety.pokemon.name),
    url: retrievePathFromUrl(variety.pokemon.url),
  }));

  return new PokemonSpecies({
    description,
    genus,
    generation,
    id,
    name,
    varieties,
  });
}
