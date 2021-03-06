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
import V1Hit from './V1Hit';
import V1Total from './V1Total';

/**
 * The V1Hits model module.
 * @module model/V1Hits
 * @version 0.2.4
 */
class V1Hits {
    /**
     * Constructs a new <code>V1Hits</code>.
     * @alias module:model/V1Hits
     */
    constructor() { 
        
        V1Hits.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Hits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Hits} obj Optional instance to populate.
     * @return {module:model/V1Hits} The populated <code>V1Hits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Hits();

            if (data.hasOwnProperty('hits')) {
                obj['hits'] = ApiClient.convertToType(data['hits'], [V1Hit]);
            }
            if (data.hasOwnProperty('max_score')) {
                obj['max_score'] = ApiClient.convertToType(data['max_score'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = V1Total.constructFromObject(data['total']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/V1Hit>} hits
 */
V1Hits.prototype['hits'] = undefined;

/**
 * @member {Number} max_score
 */
V1Hits.prototype['max_score'] = undefined;

/**
 * @member {module:model/V1Total} total
 */
V1Hits.prototype['total'] = undefined;






export default V1Hits;

