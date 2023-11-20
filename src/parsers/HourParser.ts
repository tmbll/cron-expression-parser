import { BaseParser } from "./BaseParser";

export class HourParser extends BaseParser {
  constructor() {
    super(0, 23);
  }
}
