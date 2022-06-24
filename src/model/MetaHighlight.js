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
 * The MetaHighlight model module.
 * @module model/MetaHighlight
 * @version 0.2.4
 */
class MetaHighlight {
    /**
     * Constructs a new <code>MetaHighlight</code>.
     * @alias module:model/MetaHighlight
     */
    constructor() { 
        
        MetaHighlight.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaHighlight</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaHighlight} obj Optional instance to populate.
     * @return {module:model/MetaHighlight} The populated <code>MetaHighlight</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaHighlight();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': MetaHighlight});
            }
            if (data.hasOwnProperty('fragment_size')) {
                obj['fragment_size'] = ApiClient.convertToType(data['fragment_size'], 'Number');
            }
            if (data.hasOwnProperty('number_of_fragments')) {
                obj['number_of_fragments'] = ApiClient.convertToType(data['number_of_fragments'], 'Number');
            }
            if (data.hasOwnProperty('post_tags')) {
                obj['post_tags'] = ApiClient.convertToType(data['post_tags'], ['String']);
            }
            if (data.hasOwnProperty('pre_tags')) {
                obj['pre_tags'] = ApiClient.convertToType(data['pre_tags'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, module:model/MetaHighlight>} fields
 */
MetaHighlight.prototype['fields'] = undefined;

/**
 * @member {Number} fragment_size
 */
MetaHighlight.prototype['fragment_size'] = undefined;

/**
 * @member {Number} number_of_fragments
 */
MetaHighlight.prototype['number_of_fragments'] = undefined;

/**
 * @member {Array.<String>} post_tags
 */
MetaHighlight.prototype['post_tags'] = undefined;

/**
 * @member {Array.<String>} pre_tags
 */
MetaHighlight.prototype['pre_tags'] = undefined;






export default MetaHighlight;

