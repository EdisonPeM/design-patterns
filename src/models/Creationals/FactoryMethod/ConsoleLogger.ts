import Logger from "./Logger";
import LoggerUtils from "./LoggerUtils";

class ConsoleLogger implements Logger {
  log(msg: string): void {
    const timestamp = LoggerUtils.getTimestamp();
    const message = `[Logger] ${timestamp} - ${msg}`;

    console.log(message);
  }

  clear(): void {
    console.clear();
  }
}

export default ConsoleLogger;
