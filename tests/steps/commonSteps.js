const { Then } = require('@cucumber/cucumber');
const { assert } = require('chai');


Then(/^The status code is (\d+)$/, function (status) {
  assert.equal(this.getServiceStatusCode(), status, 'Wrong Status Code');
});

Then(/^The response includes body (.*)$/, function (body) {
  const actual = this.getServiceResponse();
  const expected = JSON.parse(body);
  assert.deepEqual( actual, expected, `body does not match` );
});