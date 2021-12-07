const requestSync = require('sync-request');
const testConfigurations = require("../configurations/testConf");
const commonHelper = require("../helpers/commonHelper");


/**
 * @returns {Buffer | string}
 * @param {object} body
 * @param endpoint
 */
function post(body, endpoint) {
    let url = testConfigurations.endPoints[commonHelper.getTestEnvironment()].urls['base_url'];
    url = url + endpoint;
    const bodyParams = JSON.stringify(body);
    return requestSync('POST',url,{
        headers: {
            'Content-Type': 'application/json'
        },
        body: bodyParams,
    });

}


module.exports = {
    post,
};