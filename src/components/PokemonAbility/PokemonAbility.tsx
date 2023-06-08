import { useParams } from "react-router-dom";
import useGetAbility from "../../hooks/useGetAbility";
export default function PokemonAbility() {
  const id = useParams().id;
  const { loading, data, error } = useGetAbility(id as string);
  const PokemonAbility = data;

  return (
    <>
      <h1>Pokemon Ability</h1>
      {loading && <h2>Loading...</h2>}
      {PokemonAbility && <h2>{PokemonAbility.displayName}</h2>}
    </>
  );
}
