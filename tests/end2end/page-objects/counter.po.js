const Home = require('./home.po');

class Counter {
  constructor(browser) {
    this.browser = browser;
    this.HOME_SCREENSHOT_PATH = '/home';
    new Home(this.browser).navigateToCounter();
  }

  run() {
    this.checkBeingInCounterSection()
      .checkIncrementButtonToBeVisible()
      .checkDecrementButtonToBeVisible()
      .checkForAnchorToHome()
      .checkIncrementFunctionality()
      .checkDecrementFunctionality()
      .navigateToHome();
    this.browser.end();
  }

  checkBeingInCounterSection() {
    this.browser.expect.element('section.counter').to.be.visible;
    return this;
  }

  checkIncrementButtonToBeVisible() {
    this.browser.expect.element('button.increment').to.be.visible;
    return this;
  }

  checkDecrementButtonToBeVisible() {
    this.browser.expect.element('button.decrement').to.be.visible;
    return this;
  }

  checkForAnchorToHome() {
    this.browser.expect.element('section a').text.to.contain('Home');
    return this;
  }

  checkIncrementFunctionality() {
    this.browser.waitForElementPresent('button.increment')
      .click('button.increment').expect.element('span').text.to.equal('1');
    return this;
  }

  checkDecrementFunctionality() {
    this.browser.waitForElementPresent('button.decrement')
      .click('button.decrement').click('button.decrement').expect.element('span').text.to.equal('-1');
    return this;
  }

  navigateToHome() {
    this.browser.waitForElementPresent('section a').click('section a').expect.element('section.home').to.be.visible;
    return this;
  }
}

module.exports = Counter;
