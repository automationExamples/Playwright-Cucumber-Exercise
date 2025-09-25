module.exports = {
  default: {
    require: [
      'support/world.ts',
      'features/steps/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    paths: ['features/**/*.feature'],
    timeout: 30000,
    //timeout: 60 * 1000 // 60 seconds for all steps
  },
};
