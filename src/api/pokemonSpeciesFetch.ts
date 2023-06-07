export default async function fetchPokemonSpeciesFromApi(species: string) {
  const apiURL = "https://pokeapi.co/api/v2/pokemon-species";
  const resource = await fetch(`${apiURL}/${species}`).then((res) =>
    res.json()
  );
  return resource;
}
