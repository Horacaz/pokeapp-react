import { useEffect } from "react";
import { IParsedType } from "../types/pokemonType";
import usePokeApp from "./usePokeApp";
import mapPokemonType from "../mappers/pokemonTypeMapper";
import PokemonType from "../entities/pokemonType";
import fetchTypesFromApi from "../api/typesFetch";

export default function useGetTypes(params: number) {
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    usePokeApp<IParsedType>();

  useEffect(() => {
    const getType = async () => {
      handleLoadingAction();
      try {
        const resource = await fetchTypesFromApi(params);
        const type = new PokemonType(mapPokemonType(resource));
        handleSuccessAction(type);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    getType();
  }, [params, handleLoadingAction, handleSuccessAction, handleErrorAction]);
  return state;
}
