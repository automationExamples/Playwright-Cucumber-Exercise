# Sample Playwright Automation Test

## System Requirements

node >= v18.5.x

npm >= v7


## Setup

// Install Visual Studio Code (or any editor)

https://code.visualstudio.com/download


// Install Node.js

https://nodejs.org/en/download


```bash
git clone https://github.com/automationExamples/Playwright-Cucumber-Exercise.git
npm install
npx playwright install
```

### Recommended vscode extensions

Cucumber v1.7.0

Cucumber (Gherkin) Support enhanced for Behat


## Instructions
To run the test
```bash
npm run test
```

After running, to generate the cucumber report (cucumber_report.html)
```bash
npm run report
```

It is not expected that you complete every task, however, please give your best effort 

You will be scored based on your ability to complete the following tasks:

- [ ] Install and setup this repository on your personal computer
- [ ] Complete the automation tasks listed below

### Tasks
- [ ] Modify the scenario 'Validate the login page title' from [login.feature](features/login.feature#8) which runs but fails. Determine the cause of the failure and update the scenario to pass in the test
- [ ] Extend the scenario 'Validate login error message' from [login.feature](features/login.feature#10) which runs and passes but is missing a step. Extend the scenario to validate the error message received.
- [ ] Modify and extend the 'Validate successful purchase text' from [purchase.feature](features/purchase.feature#6) with steps for each comment listed. Consider writing a new steps.ts file along with an appropriate page.ts
- [ ] Extend the testing coverage with anything you believe would be beneficial
