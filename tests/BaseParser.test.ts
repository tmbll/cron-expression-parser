import { BaseParser } from "../src/parsers/BaseParser";

const baseParser = new BaseParser(0, 99);

describe("BaseParser", () => {
  it("parses a single value", () => {
    expect(baseParser.parse("5")).toEqual([5]);
  });

  it("parses a range of values", () => {
    expect(baseParser.parse("10-15")).toEqual([10, 11, 12, 13, 14, 15]);
  });

  it("parses a list of values", () => {
    expect(baseParser.parse("5,10,15")).toEqual([5, 10, 15]);
  });

  it("parses a step value starting from an asterisk", () => {
    expect(baseParser.parse("*/20")).toEqual([0, 20, 40, 60, 80]);
  });

  it("parses a step value with a range start", () => {
    expect(baseParser.parse("10/20")).toEqual([10, 30, 50, 70, 90]);
  });

  it("parses a step value with a full range", () => {
    expect(baseParser.parse("10-50/10")).toEqual([10, 20, 30, 40, 50]);
  });

  it("parses an asterisk as every value within the range", () => {
    expect(baseParser.parse("*")).toEqual(
      Array.from({ length: 100 }, (_, i) => i)
    );
  });

  it("does not parse values outside the range", () => {
    expect(baseParser.parse("*/10")).not.toContain(100);
    expect(baseParser.parse("99")).toEqual([99]);
    expect(baseParser.parse("100")).toEqual([]);
  });
});
