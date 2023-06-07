export default async function fetchAbilityFromApi(ability: string) {
  const apiURL = "https://pokeapi.co/api/v2/ability";
  const resource = await fetch(`${apiURL}/${ability}`).then((res) =>
    res.json()
  );
  return resource;
}
