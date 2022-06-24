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


import ApiClient from "../ApiClient";
import CoreIndex from '../model/CoreIndex';
import IndexAnalyzeResponse from '../model/IndexAnalyzeResponse';
import MetaHTTPResponse from '../model/MetaHTTPResponse';
import MetaHTTPResponseError from '../model/MetaHTTPResponseError';
import MetaHTTPResponseIndex from '../model/MetaHTTPResponseIndex';
import MetaHTTPResponseTemplate from '../model/MetaHTTPResponseTemplate';
import MetaIndexSettings from '../model/MetaIndexSettings';
import MetaIndexSimple from '../model/MetaIndexSimple';
import MetaIndexTemplate from '../model/MetaIndexTemplate';
import MetaMappings from '../model/MetaMappings';
import MetaTemplate from '../model/MetaTemplate';

/**
* Index service.
* @module api/Index
* @version 0.2.4
*/
export default class Index {

    /**
    * Constructs a new Index. 
    * @alias module:api/Index
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the analyze operation.
     * @callback module:api/Index~analyzeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IndexAnalyzeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Analyze
     * @param {Object.<String, Object>} query Query
     * @param {module:api/Index~analyzeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IndexAnalyzeResponse}
     */
    analyze(query, callback) {
      let postBody = query;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling analyze");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IndexAnalyzeResponse;
      return this.apiClient.callApi(
        '/api/_analyze', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the analyzeIndex operation.
     * @callback module:api/Index~analyzeIndexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IndexAnalyzeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Analyze
     * @param {String} index Index
     * @param {Object.<String, Object>} query Query
     * @param {module:api/Index~analyzeIndexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IndexAnalyzeResponse}
     */
    analyzeIndex(index, query, callback) {
      let postBody = query;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling analyzeIndex");
      }
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling analyzeIndex");
      }

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IndexAnalyzeResponse;
      return this.apiClient.callApi(
        '/api/{index}/_analyze', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete operation.
     * @callback module:api/Index~deleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaHTTPResponseIndex} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete index
     * @param {String} index Index
     * @param {module:api/Index~deleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaHTTPResponseIndex}
     */
    delete(index, callback) {
      let postBody = null;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling delete");
      }

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetaHTTPResponseIndex;
      return this.apiClient.callApi(
        '/api/index/{index}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/Index~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaHTTPResponseIndex} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create index
     * @param {module:model/MetaIndexSimple} index Index data
     * @param {module:api/Index~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaHTTPResponseIndex}
     */
    create(index, callback) {
      let postBody = index;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling create");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MetaHTTPResponseIndex;
      return this.apiClient.callApi(
        '/api/index', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createTemplate operation.
     * @callback module:api/Index~createTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaHTTPResponseTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create update index template
     * @param {module:model/MetaIndexTemplate} template Template data
     * @param {module:api/Index~createTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaHTTPResponseTemplate}
     */
    createTemplate(template, callback) {
      let postBody = template;
      // verify the required parameter 'template' is set
      if (template === undefined || template === null) {
        throw new Error("Missing the required parameter 'template' when calling createTemplate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MetaHTTPResponseTemplate;
      return this.apiClient.callApi(
        '/es/_index_template', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTemplate operation.
     * @callback module:api/Index~deleteTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaHTTPResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete template
     * @param {String} name Template
     * @param {module:api/Index~deleteTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaHTTPResponse}
     */
    deleteTemplate(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteTemplate");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetaHTTPResponse;
      return this.apiClient.callApi(
        '/es/_index_template/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMapping operation.
     * @callback module:api/Index~getMappingCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get index mappings
     * @param {String} index Index
     * @param {module:api/Index~getMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getMapping(index, callback) {
      let postBody = null;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling getMapping");
      }

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/{index}/_mapping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSettings operation.
     * @callback module:api/Index~getSettingsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get index settings
     * @param {String} index Index
     * @param {module:api/Index~getSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getSettings(index, callback) {
      let postBody = null;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling getSettings");
      }

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/{index}/_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTemplate operation.
     * @callback module:api/Index~getTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaIndexTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get index template
     * @param {String} name Template
     * @param {module:api/Index~getTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaIndexTemplate}
     */
    getTemplate(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getTemplate");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetaIndexTemplate;
      return this.apiClient.callApi(
        '/es/_index_template/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/Index~listCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CoreIndex>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List indexes
     * @param {module:api/Index~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CoreIndex>}
     */
    list(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CoreIndex];
      return this.apiClient.callApi(
        '/api/index', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTemplates operation.
     * @callback module:api/Index~listTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MetaTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List index teplates
     * @param {module:api/Index~listTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MetaTemplate>}
     */
    listTemplates(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MetaTemplate];
      return this.apiClient.callApi(
        '/es/_index_template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the refresh operation.
     * @callback module:api/Index~refreshCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaHTTPResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resfresh index
     * @param {String} index Index
     * @param {module:api/Index~refreshCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaHTTPResponse}
     */
    refresh(index, callback) {
      let postBody = null;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling refresh");
      }

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetaHTTPResponse;
      return this.apiClient.callApi(
        '/api/index/{index}/refresh', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setMapping operation.
     * @callback module:api/Index~setMappingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaHTTPResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set index mappings
     * @param {String} index Index
     * @param {module:model/MetaMappings} mapping Mapping
     * @param {module:api/Index~setMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaHTTPResponse}
     */
    setMapping(index, mapping, callback) {
      let postBody = mapping;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling setMapping");
      }
      // verify the required parameter 'mapping' is set
      if (mapping === undefined || mapping === null) {
        throw new Error("Missing the required parameter 'mapping' when calling setMapping");
      }

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MetaHTTPResponse;
      return this.apiClient.callApi(
        '/api/{index}/_mapping', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setSettings operation.
     * @callback module:api/Index~setSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaHTTPResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set index Settings
     * @param {String} index Index
     * @param {module:model/MetaIndexSettings} settings Settings
     * @param {module:api/Index~setSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaHTTPResponse}
     */
    setSettings(index, settings, callback) {
      let postBody = settings;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling setSettings");
      }
      // verify the required parameter 'settings' is set
      if (settings === undefined || settings === null) {
        throw new Error("Missing the required parameter 'settings' when calling setSettings");
      }

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MetaHTTPResponse;
      return this.apiClient.callApi(
        '/api/{index}/_settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTemplate operation.
     * @callback module:api/Index~updateTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaHTTPResponseTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create update index template
     * @param {String} name Template
     * @param {module:model/MetaIndexTemplate} template Template data
     * @param {module:api/Index~updateTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaHTTPResponseTemplate}
     */
    updateTemplate(name, template, callback) {
      let postBody = template;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updateTemplate");
      }
      // verify the required parameter 'template' is set
      if (template === undefined || template === null) {
        throw new Error("Missing the required parameter 'template' when calling updateTemplate");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MetaHTTPResponseTemplate;
      return this.apiClient.callApi(
        '/es/_index_template/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
