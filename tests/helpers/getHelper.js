const testConfigurations = require("../configurations/testConf");
const commonHelper = require("./commonHelper");
const requestSync = require("sync-request");

/**
 * Get requests
 * @returns {Buffer | string}
 * @param endpoint
 * @param params
 */
function  get(endpoint,params) {
    let url = testConfigurations.endPoints[commonHelper.getTestEnvironment()].urls['base_url'];
    url = url + endpoint;
    return requestSync('GET',`${url}/${params}`);
}



module.exports = {
    get,
};