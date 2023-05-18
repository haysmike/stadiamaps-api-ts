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
 * @interface GeoJSONPointAllOf
 */
export interface GeoJSONPointAllOf {
    /**
     * 
     * @type {Array<number>}
     * @memberof GeoJSONPointAllOf
     */
    coordinates: Array<number>;
}

/**
 * Check if a given object implements the GeoJSONPointAllOf interface.
 */
export function instanceOfGeoJSONPointAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "coordinates" in value;

    return isInstance;
}

export function GeoJSONPointAllOfFromJSON(json: any): GeoJSONPointAllOf {
    return GeoJSONPointAllOfFromJSONTyped(json, false);
}

export function GeoJSONPointAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoJSONPointAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coordinates': json['coordinates'],
    };
}

export function GeoJSONPointAllOfToJSON(value?: GeoJSONPointAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coordinates': value.coordinates,
    };
}

