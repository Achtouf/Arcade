const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");

const reportsPath = path.join(process.cwd(), "/e2e/reports");
const jsonReports = path.join(reportsPath, "/json");
const htmlReports = path.join(reportsPath, "/html");

class Reporter {
  static createDirectories() {
    const dirs = [jsonReports, htmlReports];
    dirs.forEach((dirName) => {
      //Check if the directory exist
      if (!fs.existsSync(dirName)) {
        mkdirp.sync(dirName);
      }
    });
  }
}

module.exports = {
  Reporter,
  reportsPath,
  jsonReports,
  htmlReports,
};