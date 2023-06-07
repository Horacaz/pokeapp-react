export default async function fetchTypesFromApi(typeId: number) {
  const apiURL = "https://pokeapi.co/api/v2/type";
  const resource = await fetch(`${apiURL}/${typeId}`).then((res) => res.json());
  return resource;
}
