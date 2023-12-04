import { useEffect } from "react";
import { IParsedPokemonMove } from "../types/pokemonMove";
import usePokeApp from "./usePokeApp";

export default function usePokemonMove(params: number) {
  const {
    state,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
    pokemonApp,
  } = usePokeApp<IParsedPokemonMove>();

  useEffect(() => {
    const getPokemonMove = async () => {
      handleLoadingAction();
      try {
        const move = await pokemonApp.getMove(params);
        handleSuccessAction(move);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    getPokemonMove();
  }, [
    params,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
    pokemonApp,
  ]);
  return state;
}
