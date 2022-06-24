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
import MetaIndexSettings from './MetaIndexSettings';
import MetaIndexShard from './MetaIndexShard';
import MetaMappings from './MetaMappings';

/**
 * The CoreIndex model module.
 * @module model/CoreIndex
 * @version 0.2.4
 */
class CoreIndex {
    /**
     * Constructs a new <code>CoreIndex</code>.
     * @alias module:model/CoreIndex
     */
    constructor() { 
        
        CoreIndex.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CoreIndex</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoreIndex} obj Optional instance to populate.
     * @return {module:model/CoreIndex} The populated <code>CoreIndex</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CoreIndex();

            if (data.hasOwnProperty('create_at')) {
                obj['create_at'] = ApiClient.convertToType(data['create_at'], 'String');
            }
            if (data.hasOwnProperty('doc_num')) {
                obj['doc_num'] = ApiClient.convertToType(data['doc_num'], 'Number');
            }
            if (data.hasOwnProperty('doc_time_max')) {
                obj['doc_time_max'] = ApiClient.convertToType(data['doc_time_max'], 'Number');
            }
            if (data.hasOwnProperty('doc_time_min')) {
                obj['doc_time_min'] = ApiClient.convertToType(data['doc_time_min'], 'Number');
            }
            if (data.hasOwnProperty('mappings')) {
                obj['mappings'] = MetaMappings.constructFromObject(data['mappings']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = MetaIndexSettings.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('shard_num')) {
                obj['shard_num'] = ApiClient.convertToType(data['shard_num'], 'Number');
            }
            if (data.hasOwnProperty('shards')) {
                obj['shards'] = ApiClient.convertToType(data['shards'], [MetaIndexShard]);
            }
            if (data.hasOwnProperty('storage_size')) {
                obj['storage_size'] = ApiClient.convertToType(data['storage_size'], 'Number');
            }
            if (data.hasOwnProperty('storage_type')) {
                obj['storage_type'] = ApiClient.convertToType(data['storage_type'], 'String');
            }
            if (data.hasOwnProperty('update_at')) {
                obj['update_at'] = ApiClient.convertToType(data['update_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} create_at
 */
CoreIndex.prototype['create_at'] = undefined;

/**
 * @member {Number} doc_num
 */
CoreIndex.prototype['doc_num'] = undefined;

/**
 * @member {Number} doc_time_max
 */
CoreIndex.prototype['doc_time_max'] = undefined;

/**
 * @member {Number} doc_time_min
 */
CoreIndex.prototype['doc_time_min'] = undefined;

/**
 * @member {module:model/MetaMappings} mappings
 */
CoreIndex.prototype['mappings'] = undefined;

/**
 * @member {String} name
 */
CoreIndex.prototype['name'] = undefined;

/**
 * @member {module:model/MetaIndexSettings} settings
 */
CoreIndex.prototype['settings'] = undefined;

/**
 * @member {Number} shard_num
 */
CoreIndex.prototype['shard_num'] = undefined;

/**
 * @member {Array.<module:model/MetaIndexShard>} shards
 */
CoreIndex.prototype['shards'] = undefined;

/**
 * @member {Number} storage_size
 */
CoreIndex.prototype['storage_size'] = undefined;

/**
 * @member {String} storage_type
 */
CoreIndex.prototype['storage_type'] = undefined;

/**
 * @member {String} update_at
 */
CoreIndex.prototype['update_at'] = undefined;






export default CoreIndex;

