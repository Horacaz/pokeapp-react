import { useEffect } from "react";
import { IParsedPokemonList } from "../types/pokemonList";
import usePokeApp from "./usePokeApp";
import fetchPokemonListfromApi from "../api/pokemonListFetch";
import PokemonList from "../entities/pokemonList";
import mapPokemonList from "../mappers/pokemonListMapper";

export default function usePokemonList(pokemonOffset: number) {
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    usePokeApp<IParsedPokemonList>();

  useEffect(() => {
    const getPokemonList = async () => {
      handleLoadingAction();
      try {
        const resource = await fetchPokemonListfromApi({
          limit: 20,
          offset: pokemonOffset,
        });
        const pokemonList = new PokemonList(mapPokemonList(resource));
        handleSuccessAction(pokemonList);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    getPokemonList();
  }, [
    pokemonOffset,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
  ]);

  return state;
}
