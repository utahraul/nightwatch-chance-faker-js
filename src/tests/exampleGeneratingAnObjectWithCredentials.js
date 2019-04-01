var utils = require('../utils/utils.js');
module.exports = {
    'Example generating and object with credentials' : function (client) {
      const random_user = utils.generate_random_private_credentials();
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 2000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', `${random_user.name} `)
        .pause(1000)
        .waitForElementVisible('input[name="btnK"]', 2000)
        .click('input[name="btnK"]')
        .waitForElementVisible('#search', 2000)
        .assert.containsText('#search', random_user.name)
        .end();
    }
  };
