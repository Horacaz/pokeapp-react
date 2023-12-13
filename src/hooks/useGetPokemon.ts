import { TPokemon } from "../types/pokemon";
import { useEffect } from "react";
import usePokeApp from "./usePokeApp";
import mapPokemon from "../mappers/pokemonMapper";
import mapPokemonSpecies from "../mappers/pokemonSpeciesMapper";
import fetchPokemonFromApi from "../api/pokemonFetch";
import Pokemon from "../entities/pokemon";
import fetchPokemonSpeciesFromApi from "../api/pokemonSpeciesFetch";

export default function useGetPokemon(params: string) {
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    usePokeApp<TPokemon>();
  useEffect(() => {
    const getPokemon = async () => {
      handleLoadingAction();
      try {
        const pokemonData = await fetchPokemonFromApi(params);
        const speciesData = await fetchPokemonSpeciesFromApi(params);
        const pokemon = new Pokemon(
          mapPokemon(pokemonData),
          mapPokemonSpecies(speciesData)
        );
        handleSuccessAction(pokemon);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    if (params) {
      getPokemon();
    }
  }, [params, handleLoadingAction, handleSuccessAction, handleErrorAction]);
  return state;
}
