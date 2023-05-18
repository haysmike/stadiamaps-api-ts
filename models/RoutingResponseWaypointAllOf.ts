/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications. All endpoints are versioned individually to allow for granular upgrades. We follow the [Semantic Versioning scheme](https://semver.org/).
 *
 * The version of the OpenAPI document: 4.1.0
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RoutingResponseWaypointAllOf
 */
export interface RoutingResponseWaypointAllOf {
    /**
     * The original index of the location (locations may be reordered for optimized routes)
     * @type {number}
     * @memberof RoutingResponseWaypointAllOf
     */
    originalIndex?: number;
}

/**
 * Check if a given object implements the RoutingResponseWaypointAllOf interface.
 */
export function instanceOfRoutingResponseWaypointAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoutingResponseWaypointAllOfFromJSON(json: any): RoutingResponseWaypointAllOf {
    return RoutingResponseWaypointAllOfFromJSONTyped(json, false);
}

export function RoutingResponseWaypointAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingResponseWaypointAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'originalIndex': !exists(json, 'original_index') ? undefined : json['original_index'],
    };
}

export function RoutingResponseWaypointAllOfToJSON(value?: RoutingResponseWaypointAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'original_index': value.originalIndex,
    };
}

