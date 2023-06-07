import capitalizeString from "../capitalizeString";
describe("capitalizeString()", () => {
  test("is a function", () => {
    expect(typeof capitalizeString).toEqual("function");
  });
  test("when passed a lowercased string it should return the string with its first letter uppercased", () => {
    expect(capitalizeString("bulbasaur")).toEqual("Bulbasaur");
  });
});
