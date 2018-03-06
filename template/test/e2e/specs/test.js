// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'main view': browser => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#main-view');
  },
  'nav bar': browser => {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.navbar-inner .title', 5000)
      .assert.containsText('.navbar-inner .title', 'Home');
  },
  'content block title': browser => {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.page-content .block-title', 5000)
      .assert.containsText('.page-content .block-title', 'Hello World')
      .end();
  },
  'content block': browser => {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.page-content .block', 5000)
      .assert.containsText(
        '.page-content .block',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est aliquam officiis quaerat placeat, cum explicabo magni soluta totam maxime autem minima accusamus eos suscipit dignissimos corporis modi voluptatum fugiat!'
      )
      .end();
  }
};
