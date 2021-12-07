// features/support/world.js
const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor() {
    this.statusCode = 0;
    this.serviceResponse = '';
    this.auxiliaryStringValue = '';
    this.secondAuxiliaryStringValue = '';
    this.thirdAuxiliaryStringValue = '';
    this.auxiliaryBooleanValue = true;
    this.auxiliaryObject = {};
    this.savedTimestamp = '';
    this.auxiliaryWWEID = '';
    this.auxiliarySecondWWEID = '';
    this.auxiliaryThirdWWEID = '';
    this.auxiliaryArray = [];
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

  getAuxiliaryStringValue() {
    return this.auxiliaryStringValue;
  }

  setAuxiliaryStringValue(response) {
    this.auxiliaryStringValue = response;
  }

  getSecondAuxiliaryStringValue() {
    return this.secondAuxiliaryStringValue;
  }

  setSecondAuxiliaryStringValue(response) {
    this.secondAuxiliaryStringValue = response;
  }

  getThirdAuxiliaryStringValue() {
    return this.thirdAuxiliaryStringValue;
  }

  setThirdAuxiliaryStringValue(response) {
    this.thirdAuxiliaryStringValue = response;
  }

  getAuxiliaryBooleanValue() {
    return this.auxiliaryBooleanValue;
  }

  setAuxiliaryBooleanValue(response) {
    this.auxiliaryBooleanValue = response;
  }

  setAuxiliaryObject(response) {
    this.auxiliaryObject = response;
  }

  getAuxiliaryObject() {
    return this.auxiliaryObject;
  }

  setSavedTimestamp(response) {
    this.savedTimestamp = response;
  }

  getSavedTimestamp() {
    return this.savedTimestamp;
  }

  getAuxiliaryWWEID() {
    return this.auxiliaryWWEID;
  }

  setAuxiliaryWWEID(auxiliaryWWEID) {
    this.auxiliaryWWEID = auxiliaryWWEID;
  }

  getAuxiliarySecondWWEID() {
    return this.auxiliarySecondWWEID;
  }

  setAuxiliarySecondWWEID(auxiliarySecondWWEID) {
    this.auxiliarySecondWWEID = auxiliarySecondWWEID;
  }

  getAuxiliaryThirdWWEID() {
    return this.auxiliaryThirdWWEID;
  }

  setAuxiliaryThirdWWEID(auxiliaryThirdWWEID) {
    this.auxiliaryThirdWWEID = auxiliaryThirdWWEID;
  }

  getAuxiliaryArray() {
    return this.auxiliaryArray;
  }

  setAuxiliaryArray(array) {
    this.auxiliaryArray = array;
  }

}

setWorldConstructor(CustomWorld);
