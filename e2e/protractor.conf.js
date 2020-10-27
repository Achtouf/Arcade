// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  directConnect: true,
  // SELENIUM_PROMISE_MANAGER: false,
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  baseUrl: "http://localhost:4200/",
  ignoreUncaughtExceptions: true,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["./src/features/**/*.feature"],
  cucumberOpts: {
    require: [
      "./src/steps/*.step.ts", // accepts a glob
    ],
  },
  capabilities: {
    browserName: "chrome",
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
    // browser.waitForAngularEnabled(true);
    // browser.manage().window().maximize();
    // Reporter.createDirectory(jsonReports);
  },
};