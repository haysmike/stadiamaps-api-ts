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
import type { IntersectingEdge } from './IntersectingEdge';
import {
    IntersectingEdgeFromJSON,
    IntersectingEdgeFromJSONTyped,
    IntersectingEdgeToJSON,
} from './IntersectingEdge';

/**
 * The node at the end of this edge
 * @export
 * @interface EndNode
 */
export interface EndNode {
    /**
     * A set of edges intersecting this node.
     * @type {Array<IntersectingEdge>}
     * @memberof EndNode
     */
    intersectingEdges?: Array<IntersectingEdge>;
    /**
     * The elapsed time along the path to arrive at this node.
     * @type {number}
     * @memberof EndNode
     */
    elapsedTime?: number;
    /**
     * The index into the `admins` list in which this node lies.
     * @type {number}
     * @memberof EndNode
     */
    adminIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof EndNode
     */
    type?: EndNodeTypeEnum;
    /**
     * True if this node is a fork.
     * @type {boolean}
     * @memberof EndNode
     */
    fork?: boolean;
    /**
     * The canonical TZDB identifier for the node's time zone.
     * @type {string}
     * @memberof EndNode
     */
    timeZone?: string;
}


/**
 * @export
 */
export const EndNodeTypeEnum = {
    StreetIntersection: 'street_intersection',
    Gate: 'gate',
    Bollard: 'bollard',
    TollBooth: 'toll_booth',
    MultiUseTransitStop: 'multi_use_transit_stop',
    BikeShare: 'bike_share',
    Parking: 'parking',
    MotorWayJunction: 'motor_way_junction',
    BorderControl: 'border_control'
} as const;
export type EndNodeTypeEnum = typeof EndNodeTypeEnum[keyof typeof EndNodeTypeEnum];


/**
 * Check if a given object implements the EndNode interface.
 */
export function instanceOfEndNode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EndNodeFromJSON(json: any): EndNode {
    return EndNodeFromJSONTyped(json, false);
}

export function EndNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndNode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'intersectingEdges': !exists(json, 'intersecting_edges') ? undefined : ((json['intersecting_edges'] as Array<any>).map(IntersectingEdgeFromJSON)),
        'elapsedTime': !exists(json, 'elapsed_time') ? undefined : json['elapsed_time'],
        'adminIndex': !exists(json, 'admin_index') ? undefined : json['admin_index'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'fork': !exists(json, 'fork') ? undefined : json['fork'],
        'timeZone': !exists(json, 'time_zone') ? undefined : json['time_zone'],
    };
}

export function EndNodeToJSON(value?: EndNode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'intersecting_edges': value.intersectingEdges === undefined ? undefined : ((value.intersectingEdges as Array<any>).map(IntersectingEdgeToJSON)),
        'elapsed_time': value.elapsedTime,
        'admin_index': value.adminIndex,
        'type': value.type,
        'fork': value.fork,
        'time_zone': value.timeZone,
    };
}

