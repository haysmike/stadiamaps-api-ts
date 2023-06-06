/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications. All endpoints are versioned individually to allow for granular upgrades. We follow the [Semantic Versioning scheme](https://semver.org/).
 *
 * The version of the OpenAPI document: 5.0.0
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
 * @interface NodeId
 */
export interface NodeId {
    /**
     * 
     * @type {number}
     * @memberof NodeId
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof NodeId
     */
    value?: number;
    /**
     * 
     * @type {number}
     * @memberof NodeId
     */
    tileId?: number;
    /**
     * 
     * @type {number}
     * @memberof NodeId
     */
    level?: number;
}

/**
 * Check if a given object implements the NodeId interface.
 */
export function instanceOfNodeId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NodeIdFromJSON(json: any): NodeId {
    return NodeIdFromJSONTyped(json, false);
}

export function NodeIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'tileId': !exists(json, 'tile_id') ? undefined : json['tile_id'],
        'level': !exists(json, 'level') ? undefined : json['level'],
    };
}

export function NodeIdToJSON(value?: NodeId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'value': value.value,
        'tile_id': value.tileId,
        'level': value.level,
    };
}
