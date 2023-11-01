import { useEffect } from "react";
import usePokeApp from "./usePokeApp";
import mapGeneration from "../mappers/generationMapper";
import Generation from "../entities/generation";
import fetchGenerationFromApi from "../api/generationFetch";
import { IParsedGeneration } from "../types/generation";

export default function useGetGeneration(params: number) {
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    usePokeApp<IParsedGeneration>();

  useEffect(() => {
    const getGeneration = async () => {
      handleLoadingAction();
      try {
        const resource = await fetchGenerationFromApi(params);
        const ability = new Generation(mapGeneration(resource));

        handleSuccessAction(ability);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    if (params) {
      getGeneration();
    }
  }, [params, handleLoadingAction, handleSuccessAction, handleErrorAction]);
  return state;
}
