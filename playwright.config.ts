import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: false,   //  run headed
    viewport: { width: 1280, height: 720 },
    video: 'on',       // optional, to record video
    screenshot: 'on',
  },
};

export default config;

