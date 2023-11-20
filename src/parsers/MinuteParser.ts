import { BaseParser } from "./BaseParser";

export class MinuteParser extends BaseParser {
  constructor() {
    super(0, 59);
  }
}
