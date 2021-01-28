const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./password-verifier");

test("Password has less than 9 characters", () => {
  expect(hasRightLength("123456789")).toBe(false);
});

test("No password entered", () => {
  expect(hasRightLength(null)).toBe(false);
});

test("Password is not Null", () => {
  expect(isNotNull(null)).toBe(false);
});

test("Password has an Uppercase Character", () => {
  expect(hasUpperCaseCharacter("A")).toBe(true);
});

test("Password has a Lowercase Character", () => {
  expect(hasLowerCaseCharacter("a")).toBe(true);
});

test("Password has a digit", () => {
  expect(hasDigit("1")).toBe(true);
});

test("minimumConditionsReached, all conditions false", () => {
  const conditions = [false, false, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});

test("verifyPassword, correct password", () => {
  expect(verifyPassword("Ab1")).toBe(true);
});
