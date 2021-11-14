/*Complex object*/
class Report {
  private reportTitle: string = "";
  private header: string = "";
  private preface: string = "";
  private content: string = "";
  private footer: string = "";

  public getReportTitle(): string {
    return this.reportTitle;
  }
  public setReportTitle(reportTitle: string): void {
    this.reportTitle = reportTitle;
  }
  public getHeader(): string {
    return this.header;
  }
  public setHeader(header: string): void {
    this.header = header;
  }
  public getPreface(): string {
    return this.preface;
  }
  public setPreface(preface: string): void {
    this.preface = preface;
  }
  public getContent(): string {
    return this.content;
  }
  public setContent(content: string): void {
    this.content = content;
  }
  public getFooter(): string {
    return this.footer;
  }
  public setFooter(footer: string): void {
    this.footer = footer;
  }
}

export default Report;
