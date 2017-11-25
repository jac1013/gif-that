const constants = require('../util/constants');

class Home {
  constructor(browser) {
    this.browser = browser;
    this.HOME_SCREENSHOT_PATH = '/home';
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
    this.browser.expect.element('section a').text.to.contain('Counter!');
    this.browser.saveScreenshot(`${constants.SCREENSHOT_PATH}${this.HOME_SCREENSHOT_PATH}/home-page.png`);
    return this;
  }

  navigateToCounter() {
    this.browser.waitForElementPresent('section a').click('section a').waitForElementNotPresent('section.home');
    return this;
  }
}

module.exports = Home;
