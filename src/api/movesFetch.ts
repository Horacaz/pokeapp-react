import FailedToFetch from "./error/failedToFetch";
export default async function fetchMoveFromApi(moveId: number) {
  const apiURL = "https://pokeapi.co/api/v2/move";
  const response = await fetch(`${apiURL}/${moveId}`);

  if (!response.ok) {
    throw new FailedToFetch(`Failed to fetch Move ${moveId}`);
  }

  const resource = response.json().then((data) => data);

  return resource;
}
