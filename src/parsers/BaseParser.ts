export class BaseParser {
  private rangeStart: number;
  private rangeEnd: number;

  constructor(rangeStart: number, rangeEnd: number) {
    this.rangeStart = rangeStart;
    this.rangeEnd = rangeEnd;
  }

  parse(field: string): number[] {
    if (field.includes(",")) {
      return this.parseList(field);
    }

    if (field.includes("/")) {
      return this.parseStep(field);
    }

    if (field.includes("-")) {
      return this.parseRange(field);
    }

    if (field === "*") {
      return this.parseEveryTimeUnit();
    }

    return this.parseSingleValue(field);
  }

  parseList(field: string): number[] {
    return field.split(",").map(Number);
  }

  parseRange(field: string): number[] {
    const [start, end] = field.split("-").map(Number);
    let times: number[] = [];

    for (let i = start; i <= end; i++) {
      times.push(i);
    }

    return times;
  }

  parseStep(field: string): number[] {
    const [rangePart, stepPart] = field.split("/");
    const stepValue = parseInt(stepPart, 10);
    let times: number[] = [];

    if (rangePart === "*") {
      for (let i = this.rangeStart; i <= this.rangeEnd; i += stepValue) {
        times.push(i);
      }
    } else {
      const rangeBounds = rangePart.split("-").map(Number);
      const rangeStart = rangeBounds[0];
      const rangeEnd =
        rangeBounds.length === 2 ? rangeBounds[1] : this.rangeEnd;

      for (
        let i = rangeStart;
        i <= rangeEnd && i <= this.rangeEnd;
        i += stepValue
      ) {
        times.push(i);
      }
    }
    return times.filter((time) => time <= this.rangeEnd);
  }

  parseEveryTimeUnit(): number[] {
    return Array.from(
      { length: this.rangeEnd - this.rangeStart + 1 },
      (_, i) => i + this.rangeStart
    );
  }

  parseSingleValue(field: string): number[] {
    const value = parseInt(field, 10);

    if (value >= this.rangeStart && value <= this.rangeEnd) {
      return [value];
    }
    return [];
  }
}
