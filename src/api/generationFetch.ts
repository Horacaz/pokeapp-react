export default async function fetchGenerationFromApi(generationId: number) {
  const apiURL = "https://pokeapi.co/api/v2/generation";
  const resource = await fetch(`${apiURL}/${generationId}`).then((res) =>
    res.json().then((data) => data)
  );
  return resource;
}
