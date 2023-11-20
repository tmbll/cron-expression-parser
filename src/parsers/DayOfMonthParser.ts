import { BaseParser } from "./BaseParser";

export class DayOfMonthParser extends BaseParser {
  constructor() {
    super(1, 31);
  }
}
