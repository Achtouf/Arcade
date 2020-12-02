// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// const { SpecReporter, StacktraceOption } = require("jasmine-spec-reporter");
const { Reporter, reportsPath } = require("./supports/reporter");
const { CucumberReporter, targetJson } = require("./supports/cucumber-reporter");

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  baseUrl: "http://localhost:4200/",
  ignoreUncaughtExceptions: true,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["./src/features/**/*.feature"],
  capabilities: {
    browserName: "chrome",
  },
  //set cucumber options
  cucumberOpts: {
    dryRun: false,
    strict: true,
    compiler: [],
    require: ["./src/steps/*.step.ts", "./commons/*.js"],
    format: "json:" + targetJson,
    storeScreenshots: true,
    screenshotsDirectory: reportsPath + "/screenshots/",
    noInlineScreenshots: true,
    scenarioTimestamp: true,
    brandTitle: "Arcade - Cucumber Report",
    title: "Arcade - Cucumber Report",
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
    Reporter.createDirectories();
  },
  onComplete() {
    CucumberReporter.createHTMLReport();
  },
  getPageTimeout: 60000,
  allScriptsTimeout: 60000,
  disableChecks: true,
  useAllAngular2AppRoots: true,
};
