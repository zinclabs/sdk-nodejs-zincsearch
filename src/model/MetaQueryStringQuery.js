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

import ApiClient from '../ApiClient';

/**
 * The MetaQueryStringQuery model module.
 * @module model/MetaQueryStringQuery
 * @version 0.2.4
 */
class MetaQueryStringQuery {
    /**
     * Constructs a new <code>MetaQueryStringQuery</code>.
     * @alias module:model/MetaQueryStringQuery
     */
    constructor() { 
        
        MetaQueryStringQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaQueryStringQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaQueryStringQuery} obj Optional instance to populate.
     * @return {module:model/MetaQueryStringQuery} The populated <code>MetaQueryStringQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaQueryStringQuery();

            if (data.hasOwnProperty('analyzer')) {
                obj['analyzer'] = ApiClient.convertToType(data['analyzer'], 'String');
            }
            if (data.hasOwnProperty('boost')) {
                obj['boost'] = ApiClient.convertToType(data['boost'], 'Number');
            }
            if (data.hasOwnProperty('default_field')) {
                obj['default_field'] = ApiClient.convertToType(data['default_field'], 'String');
            }
            if (data.hasOwnProperty('default_operator')) {
                obj['default_operator'] = ApiClient.convertToType(data['default_operator'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} analyzer
 */
MetaQueryStringQuery.prototype['analyzer'] = undefined;

/**
 * @member {Number} boost
 */
MetaQueryStringQuery.prototype['boost'] = undefined;

/**
 * @member {String} default_field
 */
MetaQueryStringQuery.prototype['default_field'] = undefined;

/**
 * or(default), and
 * @member {String} default_operator
 */
MetaQueryStringQuery.prototype['default_operator'] = undefined;

/**
 * @member {Array.<String>} fields
 */
MetaQueryStringQuery.prototype['fields'] = undefined;

/**
 * @member {String} query
 */
MetaQueryStringQuery.prototype['query'] = undefined;






export default MetaQueryStringQuery;

