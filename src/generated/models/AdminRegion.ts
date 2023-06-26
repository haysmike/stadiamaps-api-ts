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
 * @interface AdminRegion
 */
export interface AdminRegion {
    /**
     * The [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
     * @type {string}
     * @memberof AdminRegion
     */
    countryCode?: string;
    /**
     * The country name
     * @type {string}
     * @memberof AdminRegion
     */
    countryText?: string;
    /**
     * The abbreviation code for the state (varies by country).
     * @type {string}
     * @memberof AdminRegion
     */
    stateCode?: string;
    /**
     * The state name.
     * @type {string}
     * @memberof AdminRegion
     */
    stateText?: string;
}

/**
 * Check if a given object implements the AdminRegion interface.
 */
export function instanceOfAdminRegion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdminRegionFromJSON(json: any): AdminRegion {
    return AdminRegionFromJSONTyped(json, false);
}

export function AdminRegionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminRegion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countryCode': !exists(json, 'country_code') ? undefined : json['country_code'],
        'countryText': !exists(json, 'country_text') ? undefined : json['country_text'],
        'stateCode': !exists(json, 'state_code') ? undefined : json['state_code'],
        'stateText': !exists(json, 'state_text') ? undefined : json['state_text'],
    };
}

export function AdminRegionToJSON(value?: AdminRegion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'country_code': value.countryCode,
        'country_text': value.countryText,
        'state_code': value.stateCode,
        'state_text': value.stateText,
    };
}

