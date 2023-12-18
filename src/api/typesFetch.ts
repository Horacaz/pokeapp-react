import FailedToFetch from "./error/failedToFetch";
export default async function fetchTypesFromApi(typeId: number) {
  const apiURL = "https://pokeapi.co/api/v2/type";
  const response = await fetch(`${apiURL}/${typeId}`);

  if (!response.ok) {
    throw new FailedToFetch(`Failed to fetch Type ${typeId}`);
  }

  const resource = response.json().then((data) => data);

  return resource;
}
