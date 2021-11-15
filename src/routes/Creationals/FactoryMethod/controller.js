import { LoggerFactory } from "../../../models/Creationals/FactoryMethod";

let logger = LoggerFactory.getLogger();

export function changeLogger(type) {
  logger.clear();
  logger = LoggerFactory.getLogger(type);
}

export function logValue(value, updateState) {
  const result = logger.log(value);
  if (result) updateState(result);
}

export function clearLogs() {
  logger.clear();
}
