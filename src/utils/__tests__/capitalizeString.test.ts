import capitalizeString from "../capitalizeString";
describe("capitalizeString()", () => {
  test("is a function", () => {
    expect(typeof capitalizeString).toEqual("function");
  });
  test("when passed a lowercased string it should return the string with its first letter uppercased", () => {
    expect(capitalizeString("bulbasaur")).toEqual("Bulbasaur");
  });

  test("when passed a lowercased string separated with a (-) should return the string every first letter uppercased", () => {
    expect(capitalizeString("charizard-giga-x")).toEqual("Charizard Giga X");
  });
});
