export default function capitalizeString(string: string) {
  const filteredString = string.split("-");
  const capitalizedString = filteredString.map((string) => {
    const upperCaseLetter = string[0].toUpperCase();
    const slicedString = string.slice(1);
    const upperCasedString = upperCaseLetter + slicedString;
    return upperCasedString;
  });

  return capitalizedString.join(" ");
}
