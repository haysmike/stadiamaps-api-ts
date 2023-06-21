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
/**
 * 
 * @export
 * @interface SimpleRoutingWaypointAllOf
 */
export interface SimpleRoutingWaypointAllOf {
    /**
     * A `break` represents the start or end of a leg, and allows reversals. A `through` location is an intermediate waypoint that must be visited between `break`s, but at which reversals are not allowed. A `via` is similar to a `through` except that reversals are allowed. A `break_through` is similar to a `break` in that it can be the start/end of a leg, but does not allow reversals.
     * @type {string}
     * @memberof SimpleRoutingWaypointAllOf
     */
    type?: SimpleRoutingWaypointAllOfTypeEnum;
}


/**
 * @export
 */
export const SimpleRoutingWaypointAllOfTypeEnum = {
    Break: 'break',
    Through: 'through',
    Via: 'via',
    BreakThrough: 'break_through'
} as const;
export type SimpleRoutingWaypointAllOfTypeEnum = typeof SimpleRoutingWaypointAllOfTypeEnum[keyof typeof SimpleRoutingWaypointAllOfTypeEnum];


/**
 * Check if a given object implements the SimpleRoutingWaypointAllOf interface.
 */
export function instanceOfSimpleRoutingWaypointAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SimpleRoutingWaypointAllOfFromJSON(json: any): SimpleRoutingWaypointAllOf {
    return SimpleRoutingWaypointAllOfFromJSONTyped(json, false);
}

export function SimpleRoutingWaypointAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimpleRoutingWaypointAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function SimpleRoutingWaypointAllOfToJSON(value?: SimpleRoutingWaypointAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}

