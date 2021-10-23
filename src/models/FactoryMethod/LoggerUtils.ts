class LoggerUtils {
  static getTimestamp(): string {
    const currentDate = new Date();
    return currentDate.toLocaleString();

    // const [date, time] = currentDate.toISOString().split("T");
    // const [timeStandard] = time.split(".");
    // return `${date} ${timeStandard}`;
  }
}

export default LoggerUtils;
