const {When} = require("cucumber");
const postHelper = require("../helpers/postHelper");
const endpoint = '/users';

When(/^A new user is created with body (.*)$/, function (body) {
    let requestBody = JSON.parse(body);
    const response = postHelper.post(requestBody, endpoint);
    this.setServiceStatusCodeTo(response.statusCode);
    if (response.statusCode >= 300){
        this.setServiceResponse(response.body.toString('utf8'));
    }else {
        this.setServiceResponse(JSON.parse(response.getBody('utf8')));
    }
});