import { MonthParser } from "../src/parsers/MonthParser";

describe("MonthParser", () => {
  const monthParser = new MonthParser();

  it("should not return months outside of 1-12", () => {
    const months = monthParser.parse("*");

    expect(months).not.toContain(0);
    expect(months).not.toContain(13);
    expect(Math.min(...months)).toBe(1);
    expect(Math.max(...months)).toBe(12);
  });
});
