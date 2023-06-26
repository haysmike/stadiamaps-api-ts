/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 5.0.5
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
 * @interface GeoJSONLineStringAllOf
 */
export interface GeoJSONLineStringAllOf {
    /**
     * 
     * @type {Array<Array<number>>}
     * @memberof GeoJSONLineStringAllOf
     */
    coordinates: Array<Array<number>>;
}

/**
 * Check if a given object implements the GeoJSONLineStringAllOf interface.
 */
export function instanceOfGeoJSONLineStringAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "coordinates" in value;

    return isInstance;
}

export function GeoJSONLineStringAllOfFromJSON(json: any): GeoJSONLineStringAllOf {
    return GeoJSONLineStringAllOfFromJSONTyped(json, false);
}

export function GeoJSONLineStringAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoJSONLineStringAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coordinates': json['coordinates'],
    };
}

export function GeoJSONLineStringAllOfToJSON(value?: GeoJSONLineStringAllOf | null): any {
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

