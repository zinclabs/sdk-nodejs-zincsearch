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
 * The MetaUser model module.
 * @module model/MetaUser
 * @version 0.2.4
 */
class MetaUser {
    /**
     * Constructs a new <code>MetaUser</code>.
     * @alias module:model/MetaUser
     */
    constructor() { 
        
        MetaUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaUser} obj Optional instance to populate.
     * @return {module:model/MetaUser} The populated <code>MetaUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaUser();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('salt')) {
                obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
MetaUser.prototype['_id'] = undefined;

/**
 * @member {String} created_at
 */
MetaUser.prototype['created_at'] = undefined;

/**
 * @member {String} name
 */
MetaUser.prototype['name'] = undefined;

/**
 * @member {String} password
 */
MetaUser.prototype['password'] = undefined;

/**
 * @member {String} role
 */
MetaUser.prototype['role'] = undefined;

/**
 * @member {String} salt
 */
MetaUser.prototype['salt'] = undefined;

/**
 * @member {String} updated_at
 */
MetaUser.prototype['updated_at'] = undefined;






export default MetaUser;
