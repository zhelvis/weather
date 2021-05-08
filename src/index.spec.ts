import { greet } from "./index";

test("greeting", () => {
  expect(greet("Foo")).toBe("Hello Foo");
});
