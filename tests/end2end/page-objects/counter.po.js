const Home = require('./home.po');

class Counter {
  constructor(browser) {
    this.browser = browser;
    this.HOME_SCREENSHOT_PATH = '/home';
    this.COUNTER_SECTION = '.counter-section';
    this.HOME_LINK = `${this.COUNTER_SECTION}__home-link`;
    this.INCREMENT_BUTTON = `${this.COUNTER_SECTION}__container__button.increment`;
    this.DECREMENT_BUTTON = `${this.COUNTER_SECTION}__container__button.decrement`;
    this.home = new Home(this.browser);
    this.home.navigateToCounter();
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
    this.browser.expect.element(this.COUNTER_SECTION).to.be.visible;
    return this;
  }

  checkIncrementButtonToBeVisible() {
    this.browser.expect.element(this.INCREMENT_BUTTON).to.be.present;
    return this;
  }

  checkDecrementButtonToBeVisible() {
    this.browser.expect.element(this.DECREMENT_BUTTON).to.be.present;
    return this;
  }

  checkForAnchorToHome() {
    this.browser.expect.element(this.HOME_LINK).text.to.contain('Home');
    return this;
  }

  checkIncrementFunctionality() {
    this.browser.waitForElementPresent(this.INCREMENT_BUTTON)
      .click(this.INCREMENT_BUTTON).expect.element('span').text.to.equal('1');
    return this;
  }

  checkDecrementFunctionality() {
    this.browser.waitForElementPresent(this.DECREMENT_BUTTON)
      .click(this.DECREMENT_BUTTON).click(this.DECREMENT_BUTTON).expect.element('span').text.to.equal('-1');
    return this;
  }

  navigateToHome() {
    this.browser.waitForElementPresent(this.HOME_LINK).click(this.HOME_LINK).expect.element(this.home.HOME_SECTION).to.be.present;
    return this;
  }
}

module.exports = Counter;
