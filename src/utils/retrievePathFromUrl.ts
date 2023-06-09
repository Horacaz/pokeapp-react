export default function retrievePathFromUrl(url: string) {
  const parsedUrl = url.split("/v2/")[1];
  return parsedUrl;
}
