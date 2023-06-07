export default function capitalizeString(string: string) {
  const upperCase = string[0].toUpperCase();
  const slicedString = string.slice(1);
  const capitalizedString = upperCase + slicedString;
  return capitalizedString;
}
