import { useEffect } from "react";
import usePokeApp from "./usePokeApp";
import { IParsedType } from "../types/pokemonType";

export default function useGetTypes(params: number) {
  const {
    state,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
    pokemonApp,
  } = usePokeApp<IParsedType>();

  useEffect(() => {
    const getType = async () => {
      handleLoadingAction();
      try {
        const type = await pokemonApp.getType(params);
        handleSuccessAction(type);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    getType();
  }, [
    params,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
    pokemonApp,
  ]);
  return state;
}
