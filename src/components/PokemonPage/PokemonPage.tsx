import useGetPokemon from "../../hooks/useGetPokemon";
import { useParams } from "react-router-dom";
export default function PokemonPage() {
  const id = useParams().id as string;
  const { loading, data, error } = useGetPokemon(id);
  return (
    <div>
      <button type="button" onClick={() => console.log(data)}>
        Print Pokemon
      </button>
      <h1>Pokemon Page</h1>
    </div>
  );
}
