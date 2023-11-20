import { MinuteParser } from "../src/parsers/MinuteParser";

describe("MinuteParser", () => {
  const minuteParser = new MinuteParser();

  it("should not return minutes outside of 0-59", () => {
    const minutes = minuteParser.parse("*");

    expect(minutes).not.toContain(60);
    expect(Math.max(...minutes)).toBeLessThanOrEqual(59);
  });
});
