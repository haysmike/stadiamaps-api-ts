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
 * @interface MapMatchWaypoint
 */
export interface MapMatchWaypoint {
    /**
     * The latitude of a point in the shape.
     * @type {number}
     * @memberof MapMatchWaypoint
     */
    lat: number;
    /**
     * The longitude of a point in the shape.
     * @type {number}
     * @memberof MapMatchWaypoint
     */
    lon: number;
    /**
     * A `break` represents the start or end of a leg, and allows reversals. A `through` location is an intermediate waypoint that must be visited between `break`s, but at which reversals are not allowed. A `via` is similar to a `through` except that reversals are allowed. A `break_through` is similar to a `break` in that it can be the start/end of a leg, but does not allow reversals.
     * @type {string}
     * @memberof MapMatchWaypoint
     */
    type?: MapMatchWaypointTypeEnum;
    /**
     * The timestamp of the waypoint, in seconds. This can inform the map matching algorithm about when the point was measured. A UNIX timestamp, or any increasing integer sequence measuring seconds from some reference point can be used.
     * @type {number}
     * @memberof MapMatchWaypoint
     */
    time?: number;
}


/**
 * @export
 */
export const MapMatchWaypointTypeEnum = {
    Break: 'break',
    Through: 'through',
    Via: 'via',
    BreakThrough: 'break_through'
} as const;
export type MapMatchWaypointTypeEnum = typeof MapMatchWaypointTypeEnum[keyof typeof MapMatchWaypointTypeEnum];


/**
 * Check if a given object implements the MapMatchWaypoint interface.
 */
export function instanceOfMapMatchWaypoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lat" in value;
    isInstance = isInstance && "lon" in value;

    return isInstance;
}

export function MapMatchWaypointFromJSON(json: any): MapMatchWaypoint {
    return MapMatchWaypointFromJSONTyped(json, false);
}

export function MapMatchWaypointFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapMatchWaypoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lat': json['lat'],
        'lon': json['lon'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'time': !exists(json, 'time') ? undefined : json['time'],
    };
}

export function MapMatchWaypointToJSON(value?: MapMatchWaypoint | null): any {
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
        'time': value.time,
    };
}

