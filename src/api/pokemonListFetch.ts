type URLParams = {
  limit: number;
  offset: number;
};

export default async function fetchPokemonListfromApi({
  limit = 20,
  offset = 0,
}: URLParams) {
  const apiURL = "https://pokeapi.co/api/v2/pokemon";
  const resource = await fetch(
    `${apiURL}?$limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  return resource;
}