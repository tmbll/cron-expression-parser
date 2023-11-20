import { DayOfMonthParser } from "../src/parsers/DayOfMonthParser";

describe("DayOfMonthParser", () => {
  const dayOfMonthParser = new DayOfMonthParser();

  it("should not return days outside of 1-31", () => {
    const days = dayOfMonthParser.parse("*");

    expect(days).not.toContain(0);
    expect(days).not.toContain(32);
    expect(Math.min(...days)).toBeGreaterThanOrEqual(1);
    expect(Math.max(...days)).toBeLessThanOrEqual(31);
  });
});
