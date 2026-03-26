import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("1/3 - 2/3 = -1/3 is roughly -0.33", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 3);

  // Act
  left.subtract(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), -0.33);
});

Deno.test("1/3 * 2/3 = 2/9 is roughly 0.22", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 3);

  // Act
  left.multiply(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.22);
});

Deno.test("1/3 / 1/6 = 6/3 is roughly 2.00", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(1, 6);

  // Act
  left.divide(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 2.00);
});

Deno.test("toString method returns correct string representation", () => {
  // Arrange
  const fraction = new Fraction(1, 3);

  // Act
  const result = fraction.toString();

  // Assert
  assertEquals(result, "1/3");
});

Deno.test("parse method creates correct Fraction object", () => {
  // Arrange
  const expression = "2/3";

  // Act
  const fraction = Fraction.parse(expression);

  // Assert
  assertEquals(fraction.toString(), "2/3");
});

Deno.test("parse method throws error for invalid syntax", () => {
  // Arrange
  const expression = "invalid";

  // Act & Assert
  assertThrows(() => {
    Fraction.parse(expression);
  }, Error, "illegal syntax: \"[numerator]/[denominator]\" required");
});

Deno.test("parse method throws error for non-numeric values", () => {
  // Arrange
  const expression = "a/b";

  // Act & Assert
  assertThrows(() => {
    Fraction.parse(expression);
  }, Error, "non-numeric numerator/denominator");
});

