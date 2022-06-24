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
    instance = new ZincSearchSDK.MetaSimpleQueryStringQuery();
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

  describe('MetaSimpleQueryStringQuery', function() {
    it('should create an instance of MetaSimpleQueryStringQuery', function() {
      // uncomment below and update the code to test MetaSimpleQueryStringQuery
      //var instance = new ZincSearchSDK.MetaSimpleQueryStringQuery();
      //expect(instance).to.be.a(ZincSearchSDK.MetaSimpleQueryStringQuery);
    });

    it('should have the property allFields (base name: "all_fields")', function() {
      // uncomment below and update the code to test the property allFields
      //var instance = new ZincSearchSDK.MetaSimpleQueryStringQuery();
      //expect(instance).to.be();
    });

    it('should have the property analyzer (base name: "analyzer")', function() {
      // uncomment below and update the code to test the property analyzer
      //var instance = new ZincSearchSDK.MetaSimpleQueryStringQuery();
      //expect(instance).to.be();
    });

    it('should have the property boost (base name: "boost")', function() {
      // uncomment below and update the code to test the property boost
      //var instance = new ZincSearchSDK.MetaSimpleQueryStringQuery();
      //expect(instance).to.be();
    });

    it('should have the property defaultOperator (base name: "default_operator")', function() {
      // uncomment below and update the code to test the property defaultOperator
      //var instance = new ZincSearchSDK.MetaSimpleQueryStringQuery();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new ZincSearchSDK.MetaSimpleQueryStringQuery();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instance = new ZincSearchSDK.MetaSimpleQueryStringQuery();
      //expect(instance).to.be();
    });

  });

}));
