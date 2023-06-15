/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 5.0.3
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TraceAttributesRequestAllOfFilters } from './TraceAttributesRequestAllOfFilters';
import {
    TraceAttributesRequestAllOfFiltersFromJSON,
    TraceAttributesRequestAllOfFiltersFromJSONTyped,
    TraceAttributesRequestAllOfFiltersToJSON,
} from './TraceAttributesRequestAllOfFilters';

/**
 * 
 * @export
 * @interface TraceAttributesRequestAllOf
 */
export interface TraceAttributesRequestAllOf {
    /**
     * 
     * @type {TraceAttributesRequestAllOfFilters}
     * @memberof TraceAttributesRequestAllOf
     */
    filters?: TraceAttributesRequestAllOfFilters;
}

/**
 * Check if a given object implements the TraceAttributesRequestAllOf interface.
 */
export function instanceOfTraceAttributesRequestAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TraceAttributesRequestAllOfFromJSON(json: any): TraceAttributesRequestAllOf {
    return TraceAttributesRequestAllOfFromJSONTyped(json, false);
}

export function TraceAttributesRequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceAttributesRequestAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filters': !exists(json, 'filters') ? undefined : TraceAttributesRequestAllOfFiltersFromJSON(json['filters']),
    };
}

export function TraceAttributesRequestAllOfToJSON(value?: TraceAttributesRequestAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filters': TraceAttributesRequestAllOfFiltersToJSON(value.filters),
    };
}

