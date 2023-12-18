import FailedToFetch from "./error/failedToFetch";
type URLParams = {
  limit: number;
  offset: number;
};

export default async function fetchPokemonListfromApi({
  limit = 24,
  offset = 0,
}: URLParams) {
  const apiURL = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(`${apiURL}?limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    throw new FailedToFetch(`Failed to fetch Pokemon List`);
  }
  const resource = response.json().then((data) => data);

  return resource;
}
