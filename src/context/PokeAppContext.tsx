import { createContext, useReducer } from "react";
import { State, Action } from "../types/pokeApp";
function pokeAppReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case "LOADING":
      return { ...state, ...action.payload };
    case "SUCCESS": {
      return { ...state, ...action.payload };
    }
    case "ERROR":
      return { ...state, ...action.payload };
    default:
      throw new Error("Not a valid action");
  }
}
export const PokeAppContext = createContext<State<null>>({
  loading: false,
  data: null,
  error: null,
});

export const PokeAppDispatchContext = createContext(
  {} as React.Dispatch<Action<null>>
);

export function PokeAppProvider({ children }: { children: JSX.Element }) {
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  const [state, dispatch] = useReducer(pokeAppReducer<null>, initialState);
  return (
    <PokeAppContext.Provider value={state}>
      <PokeAppDispatchContext.Provider value={dispatch}>
        {children}
      </PokeAppDispatchContext.Provider>
    </PokeAppContext.Provider>
  );
}
