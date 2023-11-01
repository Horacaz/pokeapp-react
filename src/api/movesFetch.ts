export default async function fetchMoveFromApi(moveId: number) {
  const apiURL = "https://pokeapi.co/api/v2/move";
  const resource = await fetch(`${apiURL}/${moveId}`).then((res) =>
    res.json().then((data) => data)
  );
  return resource;
}
