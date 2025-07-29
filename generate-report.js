const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'report.json',
    output: 'cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
      "App Version": "1.0.0",
      "Test Environment": "Local",
      "Browser": "Playwright",
      "Platform": process.platform,
      "Executed": "Local"
    }
};

reporter.generate(options);