import FailedToFetch from "./error/failedToFetch";
export default async function fetchGenerationFromApi(generationId: number) {
  const apiURL = "https://pokeapi.co/api/v2/generation";
  const response = await fetch(`${apiURL}/${generationId}`);

  if (!response.ok) {
    throw new FailedToFetch(`Failed to fetch Generation ${generationId}`);
  }

  const resource = response.json().then((data) => data);

  return resource;
}
