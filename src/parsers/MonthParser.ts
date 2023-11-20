import { BaseParser } from "./BaseParser";

export class MonthParser extends BaseParser {
  constructor() {
    super(1, 12); // Month range is 1-12 for January to December
  }
}
