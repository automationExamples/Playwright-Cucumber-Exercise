import { setWorldConstructor, World as CucumberWorld } from '@cucumber/cucumber';
import { Page, Browser } from '@playwright/test';

export interface CustomWorld extends CucumberWorld {
  page?: Page;
  browser?: Browser;
}

class WorldImpl implements CustomWorld {
  page?: Page;
  browser?: Browser;

  constructor(options: any) {
    Object.assign(this, options);
  }
}

setWorldConstructor(WorldImpl);
