import { DayOfWeekParser } from "../src/parsers/DayOfWeekParser";

describe("DayOfWeekParser", () => {
  const dayOfWeekParser = new DayOfWeekParser();

  it("should not return days outside of 0-6", () => {
    const daysOfWeek = dayOfWeekParser.parse("*");

    expect(daysOfWeek).not.toContain(-1);
    expect(daysOfWeek).not.toContain(7);
    expect(Math.min(...daysOfWeek)).toBeGreaterThanOrEqual(0);
    expect(Math.max(...daysOfWeek)).toBeLessThanOrEqual(6);
  });
});
