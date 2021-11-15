import Report from "./Report";
import ReportBuilder from "./ReportBuilder";

/* Adapted by HAD*/
class ReportBuilderSE implements ReportBuilder {
  private report: Report;
  constructor() {
    this.report = new Report();
  }

  getReport(): Report {
    return this.report;
  }
  buildContent(): void {
    this.report.setContent(
      "My first report with Builder design pattern about Software Engineering"
    );
  }
  buildFooter(): void {
    this.report.setFooter("MCIC-UDFJC");
  }
  buildHeader(): void {
    this.report.setHeader("Mandatory course  of Software Engineering Emphasis");
  }
  buildPreface(): void {
    this.report.setPreface("Report using Builder by : MCIC student");
  }
  buildReportTitle(): void {
    this.report.setReportTitle("Software Engineering Report(1)");
  }
}

export default ReportBuilderSE;
