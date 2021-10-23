import ConsoleLogger from "./ConsoleLogger";
import Logger from "./Logger";
import MemoryLogger from "./MemoryLogger";

export const LOGGER_TYPES = {
  MEMORY: "MEMORY",
  CONSOLE: "CONSOLE",
};

class LoggerFactory {
  //Factory Method
  public getLogger(type: keyof typeof LOGGER_TYPES): Logger {
    switch (type) {
      case LOGGER_TYPES.CONSOLE: {
        return new ConsoleLogger();
      }

      case LOGGER_TYPES.MEMORY:
      default: {
        return new MemoryLogger();
      }
    }
  }
}

export default LoggerFactory;
