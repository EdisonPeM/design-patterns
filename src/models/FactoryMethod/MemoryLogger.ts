import Logger from "./Logger";
import LoggerUtils from "./LoggerUtils";

class MemoryLogger implements Logger {
  private prevMsg: string = "";

  log(msg: string): string {
    let message: string = "";
    if (this.prevMsg) message += `${this.prevMsg}\n`;
    const timestamp = LoggerUtils.getTimestamp();
    message += `${timestamp} - ${msg}`;

    this.prevMsg = message;
    return message;
  }

  clear(): void {
    this.prevMsg = "";
  }
}

export default MemoryLogger;
