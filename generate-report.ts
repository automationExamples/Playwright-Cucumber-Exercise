import {generate,Options} from 'cucumber-html-reporter';

const options: Options = {
    theme: 'bootstrap',
    jsonFile: 'report.json',
    output: 'cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {}
};

generate(options);
