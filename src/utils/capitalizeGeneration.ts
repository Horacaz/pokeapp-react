export default function capitalizeGeneration(name: string) {
  const [generationPrefix, generationSufix] = name.split("-");
  const uppercaseSufix = generationSufix
    .split("")
    .map((char) => char.toUpperCase())
    .join("");
  const prefixFirstLetterUppercase = generationPrefix.charAt(0).toUpperCase();
  const uppercasePrefix =
    prefixFirstLetterUppercase + generationPrefix.slice(1);
  return uppercasePrefix + " " + uppercaseSufix;
}
