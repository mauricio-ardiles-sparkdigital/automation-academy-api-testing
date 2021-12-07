// features/support/world.js
const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.statusCode = 0;
    this.serviceResponse = '';
  }

  getServiceStatusCode() {
    return this.statusCode;
  }

  setServiceStatusCodeTo(status) {
    this.statusCode = status;
  }

  getServiceResponse() {
    return this.serviceResponse;
  }

  setServiceResponse(response) {
    this.serviceResponse = response;
  }

}

setWorldConstructor(CustomWorld);
