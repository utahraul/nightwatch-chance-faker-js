var utils = require('../utils/utils.js');
module.exports = {
    'Example using Chance.js' : function (client) {
      const nameToSearch = utils.generate_random_name();
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 2000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', nameToSearch)
        .pause(1000)
        .waitForElementVisible('input[name="btnK"]', 2000)
        .click('input[name="btnK"]')
        .waitForElementVisible('#search', 2000)
        .assert.containsText('#search', nameToSearch)
        .end();
    }
  };
