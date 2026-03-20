import { assertAlmostEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle with radius 5 is roughly 78.54", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.area();

  // Then
  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter of a circle with radius 5 is 10", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.diameter();

  // Then
  assertAlmostEquals(actual, 10, 0.01);
});

Deno.test("diagonal of a rectangle with bottom-left (0, 0) and top-right (3, 4) is 5", () => {
  // Given
  const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(3, 4));

  // When
  const actual = rectangle.diagonal();

  // Then
  assertAlmostEquals(actual, 5, 0.01);
});