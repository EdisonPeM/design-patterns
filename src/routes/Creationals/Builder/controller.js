import {
  ReportDirector,
  ReportBuilderSE,
  ReportBuilderTEL,
} from "../../../models/Creationals/Builder";

export const BUILDER_TYPES = {
  BUILDER_SE: "Software Engineering",
  BUILDER_TEL: "Complex Theory",
};

// Factory Method
function getBuilder(type) {
  switch (type) {
    case BUILDER_TYPES.BUILDER_SE: {
      return new ReportBuilderSE();
    }

    case BUILDER_TYPES.BUILDER_TEL:
    default: {
      return new ReportBuilderTEL();
    }
  }
}

export function build(type) {
  const builder = getBuilder(type);
  const reportDirector = new ReportDirector(builder);

  reportDirector.buildReport();
  const report = reportDirector.getReport();
  return getReport(report);
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
