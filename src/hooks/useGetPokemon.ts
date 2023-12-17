import { TPokemon } from "../types/pokemon";
import { useEffect } from "react";
import usePokeApp from "./usePokeApp";
import Pokemon from "../entities/pokemon";
import retrieveSpeciesUrl from "../utils/retrieveSpeciesUrl";

export default function useGetPokemon(params: string) {
  const {
    state,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
    pokemonApp,
  } = usePokeApp<TPokemon>();
  useEffect(() => {
    const getPokemon = async () => {
      handleLoadingAction();
      try {
        const pokemonData = await pokemonApp.getPokemon(params);
        const speciesParams = retrieveSpeciesUrl(pokemonData.species.url);
        const speciesData = await pokemonApp.getSpecies(speciesParams);
        const pokemon = new Pokemon(pokemonData, speciesData);
        handleSuccessAction(pokemon);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    if (params) {
      getPokemon();
    }
  }, [
    params,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
    pokemonApp,
  ]);
  return state;
}
