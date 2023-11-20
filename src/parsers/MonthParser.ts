import { BaseParser } from "./BaseParser";

export class MonthParser extends BaseParser {
  constructor() {
    super(1, 12);
  }
}
