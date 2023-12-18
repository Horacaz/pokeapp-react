import FailedToFetch from "./error/failedToFetch";
export default async function fetchPokemonSpeciesFromApi(id: number) {
  const apiURL = "https://pokeapi.co/api/v2/pokemon-species";
  const response = await fetch(`${apiURL}/${id}`);

  if (!response.ok) {
    throw new FailedToFetch(`Failed to fetch Pokemon Species ${id}`);
  }

  const resource = response.json().then((data) => data);

  return resource;
}
