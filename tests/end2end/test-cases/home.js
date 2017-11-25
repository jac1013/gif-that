const Home = require('../page-objects/home.po');

module.exports = {
  home: (browser) => {
    new Home(browser).run();
  }
};
