import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    testIdAttribute: 'data-test'
  },
};

export default config;