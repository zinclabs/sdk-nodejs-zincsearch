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
import MetaIPRange from './MetaIPRange';

/**
 * The MetaAggregationIPRange model module.
 * @module model/MetaAggregationIPRange
 * @version 0.2.4
 */
class MetaAggregationIPRange {
    /**
     * Constructs a new <code>MetaAggregationIPRange</code>.
     * @alias module:model/MetaAggregationIPRange
     */
    constructor() { 
        
        MetaAggregationIPRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaAggregationIPRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaAggregationIPRange} obj Optional instance to populate.
     * @return {module:model/MetaAggregationIPRange} The populated <code>MetaAggregationIPRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaAggregationIPRange();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('keyed')) {
                obj['keyed'] = ApiClient.convertToType(data['keyed'], 'Boolean');
            }
            if (data.hasOwnProperty('ranges')) {
                obj['ranges'] = ApiClient.convertToType(data['ranges'], [MetaIPRange]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} field
 */
MetaAggregationIPRange.prototype['field'] = undefined;

/**
 * @member {Boolean} keyed
 */
MetaAggregationIPRange.prototype['keyed'] = undefined;

/**
 * @member {Array.<module:model/MetaIPRange>} ranges
 */
MetaAggregationIPRange.prototype['ranges'] = undefined;






export default MetaAggregationIPRange;
