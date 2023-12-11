import { useEffect } from "react";
import usePokeApp from "./usePokeApp";
import { IParsedGeneration } from "../types/generation";

export default function useGetGeneration(params: number) {
  const {
    state,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
    pokemonApp,
  } = usePokeApp<IParsedGeneration>();

  useEffect(() => {
    const getGeneration = async () => {
      handleLoadingAction();
      try {
        const generation = await pokemonApp.getGeneration(params);
        handleSuccessAction(generation);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    if (params) {
      getGeneration();
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
