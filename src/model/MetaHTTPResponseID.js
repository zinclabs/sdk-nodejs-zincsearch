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
 * The MetaHTTPResponseID model module.
 * @module model/MetaHTTPResponseID
 * @version 0.2.4
 */
class MetaHTTPResponseID {
    /**
     * Constructs a new <code>MetaHTTPResponseID</code>.
     * @alias module:model/MetaHTTPResponseID
     */
    constructor() { 
        
        MetaHTTPResponseID.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaHTTPResponseID</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaHTTPResponseID} obj Optional instance to populate.
     * @return {module:model/MetaHTTPResponseID} The populated <code>MetaHTTPResponseID</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaHTTPResponseID();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
MetaHTTPResponseID.prototype['id'] = undefined;

/**
 * @member {String} message
 */
MetaHTTPResponseID.prototype['message'] = undefined;






export default MetaHTTPResponseID;
