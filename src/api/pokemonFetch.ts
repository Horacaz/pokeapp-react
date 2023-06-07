export default async function fetchPokemonFromApi(pokemon: string) {
  const apiURL = "https://pokeapi.co/api/v2/pokemon";
  const resource = await fetch(`${apiURL}/${pokemon}`).then((res) =>
    res.json()
  );
  return resource;
}
