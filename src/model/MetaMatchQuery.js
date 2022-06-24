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
 * The MetaMatchQuery model module.
 * @module model/MetaMatchQuery
 * @version 0.2.4
 */
class MetaMatchQuery {
    /**
     * Constructs a new <code>MetaMatchQuery</code>.
     * @alias module:model/MetaMatchQuery
     */
    constructor() { 
        
        MetaMatchQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaMatchQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaMatchQuery} obj Optional instance to populate.
     * @return {module:model/MetaMatchQuery} The populated <code>MetaMatchQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaMatchQuery();

            if (data.hasOwnProperty('analyzer')) {
                obj['analyzer'] = ApiClient.convertToType(data['analyzer'], 'String');
            }
            if (data.hasOwnProperty('boost')) {
                obj['boost'] = ApiClient.convertToType(data['boost'], 'Number');
            }
            if (data.hasOwnProperty('fuzziness')) {
                obj['fuzziness'] = ApiClient.convertToType(data['fuzziness'], Object);
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('prefix_length')) {
                obj['prefix_length'] = ApiClient.convertToType(data['prefix_length'], 'Number');
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
MetaMatchQuery.prototype['analyzer'] = undefined;

/**
 * @member {Number} boost
 */
MetaMatchQuery.prototype['boost'] = undefined;

/**
 * auto, 1,2,3,n
 * @member {Object} fuzziness
 */
MetaMatchQuery.prototype['fuzziness'] = undefined;

/**
 * or(default), and
 * @member {String} operator
 */
MetaMatchQuery.prototype['operator'] = undefined;

/**
 * @member {Number} prefix_length
 */
MetaMatchQuery.prototype['prefix_length'] = undefined;

/**
 * @member {String} query
 */
MetaMatchQuery.prototype['query'] = undefined;






export default MetaMatchQuery;

