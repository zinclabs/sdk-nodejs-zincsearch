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
 * The MetaExistsQuery model module.
 * @module model/MetaExistsQuery
 * @version 0.2.4
 */
class MetaExistsQuery {
    /**
     * Constructs a new <code>MetaExistsQuery</code>.
     * @alias module:model/MetaExistsQuery
     */
    constructor() { 
        
        MetaExistsQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaExistsQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaExistsQuery} obj Optional instance to populate.
     * @return {module:model/MetaExistsQuery} The populated <code>MetaExistsQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaExistsQuery();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} field
 */
MetaExistsQuery.prototype['field'] = undefined;






export default MetaExistsQuery;

