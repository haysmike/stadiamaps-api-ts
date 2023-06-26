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
import type { RoutingWaypointAllOfSearchFilter } from './RoutingWaypointAllOfSearchFilter';
import {
    RoutingWaypointAllOfSearchFilterFromJSON,
    RoutingWaypointAllOfSearchFilterFromJSONTyped,
    RoutingWaypointAllOfSearchFilterToJSON,
} from './RoutingWaypointAllOfSearchFilter';

/**
 * 
 * @export
 * @interface RoutingWaypoint
 */
export interface RoutingWaypoint {
    /**
     * The latitude of a point in the shape.
     * @type {number}
     * @memberof RoutingWaypoint
     */
    lat: number;
    /**
     * The longitude of a point in the shape.
     * @type {number}
     * @memberof RoutingWaypoint
     */
    lon: number;
    /**
     * A `break` represents the start or end of a leg, and allows reversals. A `through` location is an intermediate waypoint that must be visited between `break`s, but at which reversals are not allowed. A `via` is similar to a `through` except that reversals are allowed. A `break_through` is similar to a `break` in that it can be the start/end of a leg, but does not allow reversals.
     * @type {string}
     * @memberof RoutingWaypoint
     */
    type?: RoutingWaypointTypeEnum;
    /**
     * The preferred direction of travel when starting the route, in integer clockwise degrees from north. North is 0, south is 180, east is 90, and west is 270.
     * @type {number}
     * @memberof RoutingWaypoint
     */
    heading?: number;
    /**
     * The tolerance (in degrees) determining whether a street is considered the same direction.
     * @type {number}
     * @memberof RoutingWaypoint
     */
    headingTolerance?: number;
    /**
     * The minimum number of nodes that must be reachable for a given edge to consider that edge as belonging to a connected region. If a candidate edge has fewer connections, it will be considered a disconnected island.
     * @type {number}
     * @memberof RoutingWaypoint
     */
    minimumReachability?: number;
    /**
     * The distance (in meters) to look for candidate edges around the location for purposes of snapping locations to the route graph. If there are no candidates within this distance, the closest candidate within a reasonable search distance will be used. This is subject to clamping by internal limits.
     * @type {number}
     * @memberof RoutingWaypoint
     */
    radius?: number;
    /**
     * If true, candidates will be ranked according to their distance from the target location as well as other factors. If false, candidates will only be ranked using their distance from the target.
     * @type {boolean}
     * @memberof RoutingWaypoint
     */
    rankCandidates?: boolean;
    /**
     * If the location is not offset from the road centerline or is closest to an intersection, this option has no effect. Otherwise, the preferred side of street is used to determine whether or not the location should be visited from the same, opposite or either side of the road with respect to the side of the road the given locale drives on.
     * @type {string}
     * @memberof RoutingWaypoint
     */
    preferredSide?: RoutingWaypointPreferredSideEnum;
    /**
     * During edge correlation this is the tolerance (in meters) used to determine whether or not to snap to the intersection rather than along the street, if the snap location is within this distance from the intersection, the intersection is used instead.
     * @type {number}
     * @memberof RoutingWaypoint
     */
    nodeSnapTolerance?: number;
    /**
     * A tolerance in meters from the edge centerline used for determining the side of the street that the location is on. If the distance to the centerline is less than this tolerance, no side will be inferred. Otherwise, the left or right side will be selected depending on the direction of travel.
     * @type {number}
     * @memberof RoutingWaypoint
     */
    streetSideTolerance?: number;
    /**
     * A tolerance in meters from the edge centerline used for determining the side of the street that the location is on. If the distance to the centerline is greater than this tolerance, no side will be inferred. Otherwise, the left or right side will be selected depending on the direction of travel.
     * @type {number}
     * @memberof RoutingWaypoint
     */
    streetSideMaxDistance?: number;
    /**
     * 
     * @type {RoutingWaypointAllOfSearchFilter}
     * @memberof RoutingWaypoint
     */
    searchFilter?: RoutingWaypointAllOfSearchFilter;
}


/**
 * @export
 */
export const RoutingWaypointTypeEnum = {
    Break: 'break',
    Through: 'through',
    Via: 'via',
    BreakThrough: 'break_through'
} as const;
export type RoutingWaypointTypeEnum = typeof RoutingWaypointTypeEnum[keyof typeof RoutingWaypointTypeEnum];

/**
 * @export
 */
export const RoutingWaypointPreferredSideEnum = {
    Same: 'same',
    Opposite: 'opposite',
    Either: 'either'
} as const;
export type RoutingWaypointPreferredSideEnum = typeof RoutingWaypointPreferredSideEnum[keyof typeof RoutingWaypointPreferredSideEnum];


/**
 * Check if a given object implements the RoutingWaypoint interface.
 */
export function instanceOfRoutingWaypoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lat" in value;
    isInstance = isInstance && "lon" in value;

    return isInstance;
}

export function RoutingWaypointFromJSON(json: any): RoutingWaypoint {
    return RoutingWaypointFromJSONTyped(json, false);
}

export function RoutingWaypointFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingWaypoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lat': json['lat'],
        'lon': json['lon'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'heading': !exists(json, 'heading') ? undefined : json['heading'],
        'headingTolerance': !exists(json, 'heading_tolerance') ? undefined : json['heading_tolerance'],
        'minimumReachability': !exists(json, 'minimum_reachability') ? undefined : json['minimum_reachability'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
        'rankCandidates': !exists(json, 'rank_candidates') ? undefined : json['rank_candidates'],
        'preferredSide': !exists(json, 'preferred_side') ? undefined : json['preferred_side'],
        'nodeSnapTolerance': !exists(json, 'node_snap_tolerance') ? undefined : json['node_snap_tolerance'],
        'streetSideTolerance': !exists(json, 'street_side_tolerance') ? undefined : json['street_side_tolerance'],
        'streetSideMaxDistance': !exists(json, 'street_side_max_distance') ? undefined : json['street_side_max_distance'],
        'searchFilter': !exists(json, 'search_filter') ? undefined : RoutingWaypointAllOfSearchFilterFromJSON(json['search_filter']),
    };
}

export function RoutingWaypointToJSON(value?: RoutingWaypoint | null): any {
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
        'heading': value.heading,
        'heading_tolerance': value.headingTolerance,
        'minimum_reachability': value.minimumReachability,
        'radius': value.radius,
        'rank_candidates': value.rankCandidates,
        'preferred_side': value.preferredSide,
        'node_snap_tolerance': value.nodeSnapTolerance,
        'street_side_tolerance': value.streetSideTolerance,
        'street_side_max_distance': value.streetSideMaxDistance,
        'search_filter': RoutingWaypointAllOfSearchFilterToJSON(value.searchFilter),
    };
}

