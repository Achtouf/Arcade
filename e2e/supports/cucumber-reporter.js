const path = require("path");
const reporter = require("cucumber-html-reporter");

const { jsonReports, htmlReports } = require("./reporter");
const targetJson = path.join(jsonReports, "/cucumber_report.json");
const targetHtml = path.join(htmlReports, "/cucumber_report.html");

const cucumberReporteroptions = {
  theme: "bootstrap",
  jsonFile: targetJson,
  output: targetHtml,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "0.0.1",
    "Test Environment": "STAGING",
    Browser: "Chrome  54.0.2840.98",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

class CucumberReporter {
  static createHTMLReport() {
    try {
      reporter.generate(cucumberReporteroptions);
    } catch (err) {
      if (err) {
        console.log("Failed to save cucumber test results to json file.");
        console.log(err);
      }
    }
  }
}

module.exports = {
  CucumberReporter,
  targetJson,
  targetHtml,
};
