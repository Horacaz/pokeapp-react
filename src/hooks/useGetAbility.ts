import { useEffect } from "react";
import usePokeApp from "./usePokeApp";
import { IParsedPokemonAbility } from "../types/pokemonAbility";

export default function useGetAbility(params: string) {
  const {
    state,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
    pokemonApp,
  } = usePokeApp<IParsedPokemonAbility>();

  useEffect(() => {
    const getAbility = async () => {
      handleLoadingAction();
      try {
        const ability = await pokemonApp.getAbility(params);
        handleSuccessAction(ability);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    if (params) {
      getAbility();
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
