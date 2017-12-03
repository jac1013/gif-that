const constants = require('../util/constants');

class Home {
  constructor(browser) {
    this.browser = browser;
    this.HOME_SCREENSHOT_PATH = '/home';
    this.HOME_SECTION = '.home-section';
    this.COUNTER_LINK = `${this.HOME_SECTION}__counter-link`;
    this.configureURL()
      .waitForBody();
  }

  run() {
    this.checkCounterLink()
      .navigateToCounter();
    this.browser.end();
  }

  configureURL() {
    this.browser.url(constants.URL);
    return this;
  }

  waitForBody() {
    this.browser.waitForElementVisible('body');
    return this;
  }

  checkCounterLink() {
    this.browser.expect.element(this.COUNTER_LINK).text.to.contain('Counter!');
    this.browser.saveScreenshot(`${constants.SCREENSHOT_PATH}${this.HOME_SCREENSHOT_PATH}/home-page.png`);
    return this;
  }

  navigateToCounter() {
    this.browser.waitForElementPresent(this.COUNTER_LINK).click(this.COUNTER_LINK).waitForElementNotPresent(this.HOME_SECTION);
    return this;
  }
}

module.exports = Home;
