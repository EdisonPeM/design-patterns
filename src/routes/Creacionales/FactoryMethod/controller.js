import LoggerFactory from "../../../models/FactoryMethod";

const factory = new LoggerFactory();
let logger = factory.getLogger();

export function changeLogger(type) {
  logger.clear();
  logger = factory.getLogger(type);
}

export function logValue(value, updateState) {
  const result = logger.log(value);
  if (result) updateState(result);
}

export function clearLogs() {
  logger.clear();
}
