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
 * @interface RoutingResponseWaypoint
 */
export interface RoutingResponseWaypoint {
    /**
     * The latitude of a point in the shape.
     * @type {number}
     * @memberof RoutingResponseWaypoint
     */
    lat: number;
    /**
     * The longitude of a point in the shape.
     * @type {number}
     * @memberof RoutingResponseWaypoint
     */
    lon: number;
    /**
     * A `break` represents the start or end of a leg, and allows reversals. A `through` location is an intermediate waypoint that must be visited between `break`s, but at which reversals are not allowed. A `via` is similar to a `through` except that reversals are allowed. A `break_through` is similar to a `break` in that it can be the start/end of a leg, but does not allow reversals.
     * @type {string}
     * @memberof RoutingResponseWaypoint
     */
    type?: RoutingResponseWaypointTypeEnum;
    /**
     * The original index of the location (locations may be reordered for optimized routes)
     * @type {number}
     * @memberof RoutingResponseWaypoint
     */
    originalIndex?: number;
}


/**
 * @export
 */
export const RoutingResponseWaypointTypeEnum = {
    Break: 'break',
    Through: 'through',
    Via: 'via',
    BreakThrough: 'break_through'
} as const;
export type RoutingResponseWaypointTypeEnum = typeof RoutingResponseWaypointTypeEnum[keyof typeof RoutingResponseWaypointTypeEnum];


/**
 * Check if a given object implements the RoutingResponseWaypoint interface.
 */
export function instanceOfRoutingResponseWaypoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lat" in value;
    isInstance = isInstance && "lon" in value;

    return isInstance;
}

export function RoutingResponseWaypointFromJSON(json: any): RoutingResponseWaypoint {
    return RoutingResponseWaypointFromJSONTyped(json, false);
}

export function RoutingResponseWaypointFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingResponseWaypoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lat': json['lat'],
        'lon': json['lon'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'originalIndex': !exists(json, 'original_index') ? undefined : json['original_index'],
    };
}

export function RoutingResponseWaypointToJSON(value?: RoutingResponseWaypoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lat': value.lat,
        'lon': value.lon,
        'type': value.type,
        'original_index': value.originalIndex,
    };
}

