/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 5.0.4
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GeoJSONPoint } from './GeoJSONPoint';
import {
    GeoJSONPointFromJSON,
    GeoJSONPointFromJSONTyped,
    GeoJSONPointToJSON,
} from './GeoJSONPoint';
import type { PeliasGeoJSONProperties } from './PeliasGeoJSONProperties';
import {
    PeliasGeoJSONPropertiesFromJSON,
    PeliasGeoJSONPropertiesFromJSONTyped,
    PeliasGeoJSONPropertiesToJSON,
} from './PeliasGeoJSONProperties';

/**
 * 
 * @export
 * @interface PeliasGeoJSONFeature
 */
export interface PeliasGeoJSONFeature {
    /**
     * 
     * @type {string}
     * @memberof PeliasGeoJSONFeature
     */
    type: PeliasGeoJSONFeatureTypeEnum;
    /**
     * 
     * @type {GeoJSONPoint}
     * @memberof PeliasGeoJSONFeature
     */
    geometry: GeoJSONPoint;
    /**
     * 
     * @type {PeliasGeoJSONProperties}
     * @memberof PeliasGeoJSONFeature
     */
    properties?: PeliasGeoJSONProperties;
    /**
     * An array of 4 floating point numbers representing the (W, S, E, N) extremes of the features found.
     * @type {Array<number>}
     * @memberof PeliasGeoJSONFeature
     */
    bbox?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof PeliasGeoJSONFeature
     */
    id?: string;
}


/**
 * @export
 */
export const PeliasGeoJSONFeatureTypeEnum = {
    Feature: 'Feature'
} as const;
export type PeliasGeoJSONFeatureTypeEnum = typeof PeliasGeoJSONFeatureTypeEnum[keyof typeof PeliasGeoJSONFeatureTypeEnum];


/**
 * Check if a given object implements the PeliasGeoJSONFeature interface.
 */
export function instanceOfPeliasGeoJSONFeature(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "geometry" in value;

    return isInstance;
}

export function PeliasGeoJSONFeatureFromJSON(json: any): PeliasGeoJSONFeature {
    return PeliasGeoJSONFeatureFromJSONTyped(json, false);
}

export function PeliasGeoJSONFeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeliasGeoJSONFeature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'geometry': GeoJSONPointFromJSON(json['geometry']),
        'properties': !exists(json, 'properties') ? undefined : PeliasGeoJSONPropertiesFromJSON(json['properties']),
        'bbox': !exists(json, 'bbox') ? undefined : json['bbox'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function PeliasGeoJSONFeatureToJSON(value?: PeliasGeoJSONFeature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'geometry': GeoJSONPointToJSON(value.geometry),
        'properties': PeliasGeoJSONPropertiesToJSON(value.properties),
        'bbox': value.bbox,
        'id': value.id,
    };
}

