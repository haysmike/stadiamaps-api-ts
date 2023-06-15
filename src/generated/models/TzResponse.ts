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
/**
 * 
 * @export
 * @interface TzResponse
 */
export interface TzResponse {
    /**
     * The canonical time zone ID. In the event that multiple time zones could be returned, the first one from the Unicode CLDR timezone.xml is returned.
     * @type {string}
     * @memberof TzResponse
     */
    tzId: string;
    /**
     * The base offset, in seconds, from UTC that is normally in effect for this time zone.
     * @type {number}
     * @memberof TzResponse
     */
    baseUtcOffset: number;
    /**
     * The special offset, in seconds, from UTC that is in effect for this time zone as of the queried timestamp (defaults to now). If no additional offsets are in effect, this value is zero. This typically reflects Daylight Saving Time, but may indicate other special offsets. To get the total offset in effect, add `dst_offset` and `utc_offset` together.
     * @type {number}
     * @memberof TzResponse
     */
    dstOffset: number;
}

/**
 * Check if a given object implements the TzResponse interface.
 */
export function instanceOfTzResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tzId" in value;
    isInstance = isInstance && "baseUtcOffset" in value;
    isInstance = isInstance && "dstOffset" in value;

    return isInstance;
}

export function TzResponseFromJSON(json: any): TzResponse {
    return TzResponseFromJSONTyped(json, false);
}

export function TzResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TzResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tzId': json['tz_id'],
        'baseUtcOffset': json['base_utc_offset'],
        'dstOffset': json['dst_offset'],
    };
}

export function TzResponseToJSON(value?: TzResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tz_id': value.tzId,
        'base_utc_offset': value.baseUtcOffset,
        'dst_offset': value.dstOffset,
    };
}

