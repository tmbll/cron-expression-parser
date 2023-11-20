import { MinuteParser } from "./parsers/MinuteParser";
import { HourParser } from "./parsers/HourParser";
import { DayOfMonthParser } from "./parsers/DayOfMonthParser";
import { MonthParser } from "./parsers/MonthParser";
import { DayOfWeekParser } from "./parsers/DayOfWeekParser";

export function parseCronExpression(cronExpression: string): void {
  const [
    minuteField,
    hourField,
    dayOfMonthField,
    monthField,
    dayOfWeekField,
    command,
  ] = cronExpression.split(" ");

  const minuteParser = new MinuteParser();
  const hourParser = new HourParser();
  const dayOfMonthParser = new DayOfMonthParser();
  const monthParser = new MonthParser();
  const dayOfWeekParser = new DayOfWeekParser();

  const minuteOutput = minuteParser.parse(minuteField);
  const hourOutput = hourParser.parse(hourField);
  const dayOfMonthOutput = dayOfMonthParser.parse(dayOfMonthField);
  const monthOutput = monthParser.parse(monthField);
  const dayOfWeekOutput = dayOfWeekParser.parse(dayOfWeekField);

  console.log("minute        ", minuteOutput.join(" "));
  console.log("hour          ", hourOutput.join(" "));
  console.log("day of month  ", dayOfMonthOutput.join(" "));
  console.log("month         ", monthOutput.join(" "));
  console.log("day of week   ", dayOfWeekOutput.join(" "));
  console.log("command       ", command);
}

const cronExpression = process.argv[2];
if (!cronExpression) {
  console.error("Please provide a cron expression.");
  process.exit(1);
}

parseCronExpression(cronExpression);
