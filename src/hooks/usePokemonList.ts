import { useEffect } from "react";
import { IParsedPokemonList } from "../types/pokemonList";
import usePokeApp from "./usePokeApp";

export default function usePokemonList(pokemonOffset: number) {
  const {
    state,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
    pokemonApp,
  } = usePokeApp<IParsedPokemonList>();

  useEffect(() => {
    const getPokemonList = async () => {
      handleLoadingAction();
      try {
        const pokemonList = await pokemonApp.getPokemonList(20, pokemonOffset);
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
    pokemonApp,
  ]);

  return state;
}
