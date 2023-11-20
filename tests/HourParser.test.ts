import { HourParser } from "../src/parsers/HourParser";

describe("HourParser", () => {
  const hourParser = new HourParser();

  it("should not return hours outside of 0-23", () => {
    const hours = hourParser.parse("*");

    expect(hours).not.toContain(24);
    expect(Math.max(...hours)).toBeLessThanOrEqual(23);
  });
});
