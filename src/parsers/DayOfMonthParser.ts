import { BaseParser } from "./BaseParser";

export class DayOfMonthParser extends BaseParser {
  constructor() {
    super(1, 31); // The day of month field has a range of 1-31
  }
}
