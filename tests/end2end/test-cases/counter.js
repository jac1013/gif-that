const Counter = require('../page-objects/counter.po');

module.exports = {
  counter: (browser) => {
    new Counter(browser).run();
  }
};
