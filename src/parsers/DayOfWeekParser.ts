import { BaseParser } from "./BaseParser";

export class DayOfWeekParser extends BaseParser {
  constructor() {
    super(0, 6); // Week range is typically 0-6 where 0 = Sunday and 6 = Saturday
  }
}
