import { useContext, useCallback } from "react";
import {
  PokeAppDispatchContext,
  PokeAppContext,
} from "../context/PokeAppContext";
import { Action, State } from "../types/pokeApp";

export default function usePokeApp<T>() {
  const dispatch = useContext(PokeAppDispatchContext) as React.Dispatch<
    Action<T>
  >;
  const state = useContext(PokeAppContext) as State<T>;

  const handleLoadingAction = useCallback(() => {
    return dispatch({
      type: "LOADING",
      payload: {
        loading: true,
        data: null,
        error: null,
      },
    });
  }, [dispatch]);

  const handleErrorAction = useCallback(
    (error: Error) => {
      return dispatch({
        type: "ERROR",
        payload: {
          loading: false,
          data: null,
          error: error,
        },
      });
    },
    [dispatch]
  );

  const handleSuccessAction = useCallback(
    (data: T) => {
      return dispatch({
        type: "SUCCESS",
        payload: {
          loading: false,
          data: data,
          error: null,
        },
      });
    },
    [dispatch]
  );

  return {
    state,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
  };
}
