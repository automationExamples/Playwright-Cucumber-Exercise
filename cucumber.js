// module.exports = {
// default:
// `--require-module ts-node/register --require './steps/**/*.ts' --require './hooks/**/*.ts --format @cucumber/pretty-formatter`

// cucumber.js
module.exports = {
  default: `--require-module ts-node/register \
            --require "steps/**/*.ts" \
            --require "hooks/**/*.ts" \
            --format progress \
            --format json:reports/cucumber.json \
            --parallel 1`
};
