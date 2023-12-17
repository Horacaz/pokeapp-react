export default function retrieveSpeciesUrl(url: string): number {
  const parsedUrlId = url.split(/pokemon-species\/(\d+)/)[1];
  return Number(parsedUrlId);
}
