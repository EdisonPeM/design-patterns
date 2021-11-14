import type Report from "./Report";
import type ReportBuilder from "./ReportBuilder";

/*The runtime object build the complex objects*/
class ReportDirector {
  constructor(private myBuilder: ReportBuilder) {}

  public buildReport(): void {
    // report building logic/steps
    this.myBuilder.buildReportTitle();
    this.myBuilder.buildHeader();
    this.myBuilder.buildPreface();
    this.myBuilder.buildContent();
    this.myBuilder.buildFooter();
  }

  public getReport(): Report {
    return this.myBuilder.getReport();
  }
}

export default ReportDirector;
