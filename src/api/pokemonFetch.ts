import FailedToFetch from "./error/failedToFetch";
export default async function fetchPokemonFromApi(pokemon: string) {
  const apiURL = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(`${apiURL}/${pokemon}`);
  if (response.ok) {
    const resource = response.json().then((data) => data);
    return resource;
  }

  throw new FailedToFetch(`Failed to fetch Pokemon ${pokemon}`);
}
