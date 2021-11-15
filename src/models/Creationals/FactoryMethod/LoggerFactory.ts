import ConsoleLogger from "./ConsoleLogger";
import Logger from "./Logger";
import MemoryLogger from "./MemoryLogger";

class LoggerFactory {
  static LOGGER_TYPES = {
    MEMORY: "MEMORY",
    CONSOLE: "CONSOLE",
  };

  //Factory Method
  static getLogger(type?: keyof typeof LoggerFactory.LOGGER_TYPES): Logger {
    switch (type) {
      case LoggerFactory.LOGGER_TYPES.CONSOLE: {
        return new ConsoleLogger();
      }

      case LoggerFactory.LOGGER_TYPES.MEMORY:
      default: {
        return new MemoryLogger();
      }
    }
  }
}

export default LoggerFactory;
