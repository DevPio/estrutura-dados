const { describe, test, expect } = require("@jest/globals");
const { firstNonRepeatingCharacter } = require("./first-non");
describe(firstNonRepeatingCharacter.name, () => {
  test("should returns 1", () => {
    expect(firstNonRepeatingCharacter("abcdcaf")).toEqual(1);
  });
});
