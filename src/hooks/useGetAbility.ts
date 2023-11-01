import { useEffect } from "react";
import usePokeApp from "./usePokeApp";
import mapPokemonAbility from "../mappers/pokemonAbilityMapper";
import PokemonAbility from "../entities/pokemonAbility";
import { IParsedPokemonAbility } from "../types/pokemonAbility";
import fetchAbilityFromApi from "../api/abilityFetch";

export default function useGetAbility(params: string) {
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    usePokeApp<IParsedPokemonAbility>();

  useEffect(() => {
    const getAbility = async () => {
      handleLoadingAction();
      try {
        const resource = await fetchAbilityFromApi(params);
        const ability: IParsedPokemonAbility = new PokemonAbility(
          mapPokemonAbility(resource)
        );
        handleSuccessAction(ability);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    if (params) {
      getAbility();
    }
  }, [params, handleLoadingAction, handleSuccessAction, handleErrorAction]);
  return state;
}
