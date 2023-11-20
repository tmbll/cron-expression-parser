import { BaseParser } from "./BaseParser";

export class HourParser extends BaseParser {
  constructor() {
    super(0, 23); // Set the range limit to 24 for hours (0-23)
  }
}
