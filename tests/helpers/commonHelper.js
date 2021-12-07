
module.exports = {
  getTestEnvironment() {
    return process.env.TEST_ENV || 'local';
  },


  convertStringToBoolean(value) {
    if (value === 'true' || value === 'TRUE' || value === 'True') {
      value = true;
    } else if (value === 'false' || value === 'FALSE' || value === 'False') {
      value = false;
    }
    return value;
  },


  convertStringToInteger(value) {
    if (value.match(/^\d/)) {
      value = parseInt(value, 10);
    }

    return value;
  },

};
