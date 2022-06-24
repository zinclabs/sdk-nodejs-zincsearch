/**
 * Zinc Search engine API
 * Zinc Search engine API documents https://docs.zincsearch.com
 *
 * The version of the OpenAPI document: 0.2.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ZincSearchSDK);
  }
}(this, function(expect, ZincSearchSDK) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ZincSearchSDK.MetaAnalyzer();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MetaAnalyzer', function() {
    it('should create an instance of MetaAnalyzer', function() {
      // uncomment below and update the code to test MetaAnalyzer
      //var instance = new ZincSearchSDK.MetaAnalyzer();
      //expect(instance).to.be.a(ZincSearchSDK.MetaAnalyzer);
    });

    it('should have the property charFilter (base name: "char_filter")', function() {
      // uncomment below and update the code to test the property charFilter
      //var instance = new ZincSearchSDK.MetaAnalyzer();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function() {
      // uncomment below and update the code to test the property filter
      //var instance = new ZincSearchSDK.MetaAnalyzer();
      //expect(instance).to.be();
    });

    it('should have the property lowercase (base name: "lowercase")', function() {
      // uncomment below and update the code to test the property lowercase
      //var instance = new ZincSearchSDK.MetaAnalyzer();
      //expect(instance).to.be();
    });

    it('should have the property pattern (base name: "pattern")', function() {
      // uncomment below and update the code to test the property pattern
      //var instance = new ZincSearchSDK.MetaAnalyzer();
      //expect(instance).to.be();
    });

    it('should have the property stopwords (base name: "stopwords")', function() {
      // uncomment below and update the code to test the property stopwords
      //var instance = new ZincSearchSDK.MetaAnalyzer();
      //expect(instance).to.be();
    });

    it('should have the property tokenFilter (base name: "token_filter")', function() {
      // uncomment below and update the code to test the property tokenFilter
      //var instance = new ZincSearchSDK.MetaAnalyzer();
      //expect(instance).to.be();
    });

    it('should have the property tokenizer (base name: "tokenizer")', function() {
      // uncomment below and update the code to test the property tokenizer
      //var instance = new ZincSearchSDK.MetaAnalyzer();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ZincSearchSDK.MetaAnalyzer();
      //expect(instance).to.be();
    });

  });

}));