import { BaseParser } from "./BaseParser";

export class MinuteParser extends BaseParser {
  constructor() {
    super(0, 59); // Set the range limit to 60 for minutes (0-59)
  }
}
