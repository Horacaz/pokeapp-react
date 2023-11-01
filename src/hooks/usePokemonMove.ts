import { useEffect } from "react";
import { IParsedPokemonMove } from "../types/pokemonMove";
import usePokeApp from "./usePokeApp";
import mapPokemonMove from "../mappers/pokemonMoveMapper";
import PokemonMove from "../entities/pokemonMove";
import fetchMoveFromApi from "../api/movesFetch";

export default function usePokemonMove(params: number) {
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    usePokeApp<IParsedPokemonMove>();

  useEffect(() => {
    const getPokemonMove = async () => {
      handleLoadingAction();
      try {
        const resource = await fetchMoveFromApi(params);
        const move = new PokemonMove(mapPokemonMove(resource));
        handleSuccessAction(move);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    getPokemonMove();
  }, [params, handleLoadingAction, handleSuccessAction, handleErrorAction]);
  return state;
}
