import FailedToFetch from "./error/failedToFetch";
export default async function fetchAbilityFromApi(ability: string) {
  const apiURL = "https://pokeapi.co/api/v2/ability";
  const response = await fetch(`${apiURL}/${ability}`);
  if (!response.ok) {
    throw new FailedToFetch(`Failed to fetch Ability ${ability}`);
  }

  const resource = response.json().then((data) => data);

  return resource;
}
