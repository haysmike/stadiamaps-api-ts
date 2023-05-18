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
 * @interface GeocodingObject
 */
export interface GeocodingObject {
    /**
     * A URL containing attribution information. If you are not using Stadia Maps and our standard attribution already for your basemaps, you must include this attribution link somewhere in your website/app.
     * @type {string}
     * @memberof GeocodingObject
     */
    attribution?: string;
    /**
     * Technical details of the query. This is most useful for debugging during development. See the full example for the list of properties; these should be self-explanatory, so we don't enumerate them in the spec.
     * @type {{ [key: string]: any; }}
     * @memberof GeocodingObject
     */
    query?: { [key: string]: any; };
    /**
     * An array of non-critical warnings. This is normally for informational/debugging purposes and not a serious problem.
     * @type {Array<string>}
     * @memberof GeocodingObject
     */
    warnings?: Array<string>;
    /**
     * An array of more serious errors (for example, omitting a required parameter). Don’t ignore these.
     * @type {Array<string>}
     * @memberof GeocodingObject
     */
    errors?: Array<string>;
}

/**
 * Check if a given object implements the GeocodingObject interface.
 */
export function instanceOfGeocodingObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GeocodingObjectFromJSON(json: any): GeocodingObject {
    return GeocodingObjectFromJSONTyped(json, false);
}

export function GeocodingObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeocodingObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attribution': !exists(json, 'attribution') ? undefined : json['attribution'],
        'query': !exists(json, 'query') ? undefined : json['query'],
        'warnings': !exists(json, 'warnings') ? undefined : json['warnings'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function GeocodingObjectToJSON(value?: GeocodingObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attribution': value.attribution,
        'query': value.query,
        'warnings': value.warnings,
        'errors': value.errors,
    };
}

