import { IUnparsedGeneration, IParsedGeneration } from "../types/generation";
import capitalizeString from "../utils/capitalizeString";
import retrievePathFromUrl from "../utils/retrievePathFromUrl";
import Generation from "../entities/generation";

export default function mapGeneration(
  generationData: IUnparsedGeneration
): IParsedGeneration {
  const abilities = generationData.abilities.map((ability) => ({
    name: capitalizeString(ability.name),
    url: retrievePathFromUrl(ability.url),
  }));
  const id = generationData.id;
  const mainRegion = capitalizeString(generationData.main_region.name);
  const moves = generationData.moves.map((move) => ({
    name: capitalizeString(move.name),
    url: retrievePathFromUrl(move.url),
  }));
  const pokemonSpecies = generationData.pokemon_species.map((species) => ({
    name: capitalizeString(species.name),
    url: retrievePathFromUrl(species.url),
  }));
  const types = generationData.types.map((type) => ({
    name: capitalizeString(type.name),
    url: retrievePathFromUrl(type.url),
  }));
  return new Generation({
    abilities,
    id,
    mainRegion,
    moves,
    pokemonSpecies,
    types,
  });
}
