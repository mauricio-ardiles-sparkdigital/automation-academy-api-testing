const {When} = require("@cucumber/cucumber");
const endpoint = '/menu';
const getHelper = require('../helpers/getHelper')
const {Then} = require("@cucumber/cucumber");
const {assert} = require("chai");
const menuHelper = require('../helpers/menuHelper')

When(/^a menu request searching for user id (.*) is sent$/, function (id) {
    const response = getHelper.get(endpoint,id);
    this.setServiceStatusCodeTo(response.statusCode);
    this.setServiceResponse(JSON.parse(response.getBody('utf-8')));
});


Then(/^The menu response includes rating property with the following values (.*)$/, function (rating) {
    const actual = this.getServiceResponse()['rating'];
    const expected = JSON.parse(rating);
    assert.deepEqual( actual, expected['rating'], `Rating does not match` );
});


Then(/^The menu response includes only VODs according to user rating access$/, function () {
 const userRating = this.getServiceResponse()['rating'];
 const vodGenreResponse = this.getServiceResponse().vod_genre;
 const result = menuHelper.checkMenuVODsRating(userRating, vodGenreResponse);
 assert.isTrue(result.status, result.messages);

});