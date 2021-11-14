/* Build the report about Complex Theory course*/

import Report from "./Report";
import ReportBuilder from "./ReportBuilder";

/*Adapted by HAD*/
class ReportBuilderTEL implements ReportBuilder {
  private report: Report;
  constructor() {
    this.report = new Report();
  }

  public getReport(): Report {
    return this.report;
  }

  public buildContent(): void {
    this.report.setContent(
      "My first report with Builder design pattern about Complex Theory"
    );
  }

  public buildFooter(): void {
    this.report.setFooter("MCIC-UDFJC");
  }

  public buildHeader(): void {
    this.report.setHeader("Mandatory course  of Telematic Emphasis");
  }

  public buildPreface(): void {
    this.report.setPreface("Report using Builder by : MCIC student");
  }

  public buildReportTitle(): void {
    this.report.setReportTitle("Complex Theory Report(2)");
  }
}

export default ReportBuilderTEL;
