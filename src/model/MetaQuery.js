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
import MetaBoolQuery from './MetaBoolQuery';
import MetaExistsQuery from './MetaExistsQuery';
import MetaFuzzyQuery from './MetaFuzzyQuery';
import MetaIdsQuery from './MetaIdsQuery';
import MetaMatchBoolPrefixQuery from './MetaMatchBoolPrefixQuery';
import MetaMatchPhrasePrefixQuery from './MetaMatchPhrasePrefixQuery';
import MetaMatchPhraseQuery from './MetaMatchPhraseQuery';
import MetaMatchQuery from './MetaMatchQuery';
import MetaMultiMatchQuery from './MetaMultiMatchQuery';
import MetaPrefixQuery from './MetaPrefixQuery';
import MetaQueryStringQuery from './MetaQueryStringQuery';
import MetaRangeQuery from './MetaRangeQuery';
import MetaRegexpQuery from './MetaRegexpQuery';
import MetaSimpleQueryStringQuery from './MetaSimpleQueryStringQuery';
import MetaTermQuery from './MetaTermQuery';
import MetaWildcardQuery from './MetaWildcardQuery';

/**
 * The MetaQuery model module.
 * @module model/MetaQuery
 * @version 0.2.4
 */
class MetaQuery {
    /**
     * Constructs a new <code>MetaQuery</code>.
     * @alias module:model/MetaQuery
     */
    constructor() { 
        
        MetaQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaQuery} obj Optional instance to populate.
     * @return {module:model/MetaQuery} The populated <code>MetaQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaQuery();

            if (data.hasOwnProperty('bool')) {
                obj['bool'] = MetaBoolQuery.constructFromObject(data['bool']);
            }
            if (data.hasOwnProperty('exists')) {
                obj['exists'] = MetaExistsQuery.constructFromObject(data['exists']);
            }
            if (data.hasOwnProperty('fuzzy')) {
                obj['fuzzy'] = ApiClient.convertToType(data['fuzzy'], {'String': MetaFuzzyQuery});
            }
            if (data.hasOwnProperty('ids')) {
                obj['ids'] = MetaIdsQuery.constructFromObject(data['ids']);
            }
            if (data.hasOwnProperty('match')) {
                obj['match'] = ApiClient.convertToType(data['match'], {'String': MetaMatchQuery});
            }
            if (data.hasOwnProperty('match_all')) {
                obj['match_all'] = ApiClient.convertToType(data['match_all'], Object);
            }
            if (data.hasOwnProperty('match_bool_prefix')) {
                obj['match_bool_prefix'] = ApiClient.convertToType(data['match_bool_prefix'], {'String': MetaMatchBoolPrefixQuery});
            }
            if (data.hasOwnProperty('match_none')) {
                obj['match_none'] = ApiClient.convertToType(data['match_none'], Object);
            }
            if (data.hasOwnProperty('match_phrase')) {
                obj['match_phrase'] = ApiClient.convertToType(data['match_phrase'], {'String': MetaMatchPhraseQuery});
            }
            if (data.hasOwnProperty('match_phrase_prefix')) {
                obj['match_phrase_prefix'] = ApiClient.convertToType(data['match_phrase_prefix'], {'String': MetaMatchPhrasePrefixQuery});
            }
            if (data.hasOwnProperty('multi_match')) {
                obj['multi_match'] = MetaMultiMatchQuery.constructFromObject(data['multi_match']);
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], {'String': MetaPrefixQuery});
            }
            if (data.hasOwnProperty('query_string')) {
                obj['query_string'] = MetaQueryStringQuery.constructFromObject(data['query_string']);
            }
            if (data.hasOwnProperty('range')) {
                obj['range'] = ApiClient.convertToType(data['range'], {'String': MetaRangeQuery});
            }
            if (data.hasOwnProperty('regexp')) {
                obj['regexp'] = ApiClient.convertToType(data['regexp'], {'String': MetaRegexpQuery});
            }
            if (data.hasOwnProperty('simple_query_string')) {
                obj['simple_query_string'] = MetaSimpleQueryStringQuery.constructFromObject(data['simple_query_string']);
            }
            if (data.hasOwnProperty('term')) {
                obj['term'] = ApiClient.convertToType(data['term'], {'String': MetaTermQuery});
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], {'String': Object});
            }
            if (data.hasOwnProperty('wildcard')) {
                obj['wildcard'] = ApiClient.convertToType(data['wildcard'], {'String': MetaWildcardQuery});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetaBoolQuery} bool
 */
MetaQuery.prototype['bool'] = undefined;

/**
 * @member {module:model/MetaExistsQuery} exists
 */
MetaQuery.prototype['exists'] = undefined;

/**
 * simple, PrefixQuery
 * @member {Object.<String, module:model/MetaFuzzyQuery>} fuzzy
 */
MetaQuery.prototype['fuzzy'] = undefined;

/**
 * @member {module:model/MetaIdsQuery} ids
 */
MetaQuery.prototype['ids'] = undefined;

/**
 * simple, MatchQuery
 * @member {Object.<String, module:model/MetaMatchQuery>} match
 */
MetaQuery.prototype['match'] = undefined;

/**
 * @member {Object} match_all
 */
MetaQuery.prototype['match_all'] = undefined;

/**
 * simple, MatchBoolPrefixQuery
 * @member {Object.<String, module:model/MetaMatchBoolPrefixQuery>} match_bool_prefix
 */
MetaQuery.prototype['match_bool_prefix'] = undefined;

/**
 * @member {Object} match_none
 */
MetaQuery.prototype['match_none'] = undefined;

/**
 * simple, MatchPhraseQuery
 * @member {Object.<String, module:model/MetaMatchPhraseQuery>} match_phrase
 */
MetaQuery.prototype['match_phrase'] = undefined;

/**
 * simple, MatchPhrasePrefixQuery
 * @member {Object.<String, module:model/MetaMatchPhrasePrefixQuery>} match_phrase_prefix
 */
MetaQuery.prototype['match_phrase_prefix'] = undefined;

/**
 * @member {module:model/MetaMultiMatchQuery} multi_match
 */
MetaQuery.prototype['multi_match'] = undefined;

/**
 * .
 * @member {Object.<String, module:model/MetaPrefixQuery>} prefix
 */
MetaQuery.prototype['prefix'] = undefined;

/**
 * @member {module:model/MetaQueryStringQuery} query_string
 */
MetaQuery.prototype['query_string'] = undefined;

/**
 * simple, FuzzyQuery
 * @member {Object.<String, module:model/MetaRangeQuery>} range
 */
MetaQuery.prototype['range'] = undefined;

/**
 * simple, FuzzyQuery
 * @member {Object.<String, module:model/MetaRegexpQuery>} regexp
 */
MetaQuery.prototype['regexp'] = undefined;

/**
 * @member {module:model/MetaSimpleQueryStringQuery} simple_query_string
 */
MetaQuery.prototype['simple_query_string'] = undefined;

/**
 * simple, TermQuery
 * @member {Object.<String, module:model/MetaTermQuery>} term
 */
MetaQuery.prototype['term'] = undefined;

/**
 * .
 * @member {Object.<String, Object>} terms
 */
MetaQuery.prototype['terms'] = undefined;

/**
 * simple, WildcardQuery
 * @member {Object.<String, module:model/MetaWildcardQuery>} wildcard
 */
MetaQuery.prototype['wildcard'] = undefined;






export default MetaQuery;

