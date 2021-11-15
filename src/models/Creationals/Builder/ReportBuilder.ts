import type Report from "./Report";

interface ReportBuilder {
  buildPreface(): void;
  buildReportTitle(): void;
  buildHeader(): void;
  buildContent(): void;
  buildFooter(): void;
  getReport(): Report;
}

export default ReportBuilder;
