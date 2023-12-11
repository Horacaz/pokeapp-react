import fetchAbilityFromApi from "./../api/abilityFetch";
import fetchGenerationFromApi from "./../api/generationFetch";
import fetchMoveFromApi from "./../api/movesFetch";
import fetchPokemonFromApi from "./../api/pokemonFetch";
import fetchTypeFromApi from "./../api/typesFetch";
import fetchPokemonListfromApi from "./../api/pokemonListFetch";
import fetchPokemonSpeciesFromApi from "../api/pokemonSpeciesFetch";

export default class ApiService {
  async getAbility(ability: string) {
    return fetchAbilityFromApi(ability);
  }

  async getGeneration(generationId: number) {
    return fetchGenerationFromApi(generationId);
  }

  async getMove(moveId: number) {
    return fetchMoveFromApi(moveId);
  }

  async getPokemon(pokemon: string) {
    return fetchPokemonFromApi(pokemon);
  }

  async getType(typeId: number) {
    return fetchTypeFromApi(typeId);
  }

  async getPokemonList(limit: number, offset: number) {
    return fetchPokemonListfromApi({ limit, offset });
  }

  async getPokemonSpecies(species: string) {
    return fetchPokemonSpeciesFromApi(species);
  }
}
