module.exports = {
  default: [
    "--require-module ts-node/register",
    "--require ./steps/**/*.ts",
    "--require ./hooks/**/*.ts",
    "--require ./support/**/*.ts",
    "--format @cucumber/pretty-formatter"
  ].join(" ")
};
