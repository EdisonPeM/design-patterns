import {
  ReportDirector,
  ReportBuilderSE,
  ReportBuilderTEL,
} from "../../../models/Creacionales/Builder";

export const BUILDER_TYPES = {
  BUILDER_SE: "Software Engineering",
  BUILDER_TEL: "Complex Theory",
};

export function build(type) {
  switch (type) {
    case BUILDER_TYPES.BUILDER_SE: {
      const builder = new ReportBuilderSE();
      const reportDirector = new ReportDirector(builder);
      reportDirector.buildReport();
      const report = reportDirector.getReport();
      return getReport(report);
    }

    case BUILDER_TYPES.BUILDER_TEL:
    default: {
      const builder = new ReportBuilderTEL();
      const reportDirector = new ReportDirector(builder);
      reportDirector.buildReport();
      const report = reportDirector.getReport();
      return getReport(report);
    }
  }
}

function getReport(report) {
  return {
    title: report.getReportTitle(),
    header: report.getHeader(),
    preface: report.getPreface(),
    content: report.getContent(),
    footer: report.getFooter(),
  };
}
