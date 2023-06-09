import { useEffect, useReducer } from "react";
import { IParsedPokemonMove } from "../types/pokemonMove";
import mapPokemonMove from "../mappers/pokemonMoveMapper";
import PokemonMove from "../entities/pokemonMove";
import fetchMovesFromApi from "../api/movesFetch";

type State = {
  loading: boolean | null;
  data: IParsedPokemonMove | null;
  error: Error | null;
};

type Action = {
  type: string;
  payload: IParsedPokemonMove | null | Error;
};
const initalState: State = { loading: null, data: null, error: null };

const pokemonMoveReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, data: null, error: null };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload as IParsedPokemonMove,
        error: null,
      };
    case "ERROR":
      return { ...state, loading: false, data: null, error: payload as Error };
    default:
      return state;
  }
};

export default function usePokemonMove(params: number) {
  const [state, dispatch] = useReducer(pokemonMoveReducer, initalState);
  useEffect(() => {
    const getPokemonMove = async () => {
      dispatch({ type: "LOADING", payload: null });
      try {
        const resource = await fetchMovesFromApi(params);
        const Moves = new PokemonMove(mapPokemonMove(resource));
        dispatch({ type: "SUCCESS", payload: Moves });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error as Error });
      }
    };
    getPokemonMove();
  }, [params]);
  return state;
}
