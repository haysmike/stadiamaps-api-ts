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
 * @interface BicycleCostingOptionsAllOf
 */
export interface BicycleCostingOptionsAllOf {
    /**
     * 
     * @type {string}
     * @memberof BicycleCostingOptionsAllOf
     */
    bicycleType?: BicycleCostingOptionsAllOfBicycleTypeEnum;
    /**
     * The average comfortable travel speed (in kph) along smooth, flat roads. The costing will vary the speed based on the surface, bicycle type, elevation change, etc. This value should be the average sustainable cruising speed the cyclist can maintain over the entire route.
     * The default speeds are as follows based on bicycle type:
     *   * Road - 25kph
     *   * Cross - 20kph
     *   * Hybrid - 18kph
     *   * Mountain - 16kph
     * @type {number}
     * @memberof BicycleCostingOptionsAllOf
     */
    cyclingSpeed?: number;
    /**
     * A measure of willingness to use roads alongside other vehicles. Values near 0 attempt to avoid roads and stay on cycleways, and values near 1 indicate the cyclist is more comfortable on roads.
     * @type {number}
     * @memberof BicycleCostingOptionsAllOf
     */
    useRoads?: number;
    /**
     * A measure of willingness to take tackle hills. Values near 0 attempt to avoid hills and steeper grades even if it means a longer route, and values near 1 indicates that the user does not fear them. Note that as some routes may be impossible without hills, 0 does not guarantee avoidance of them.
     * @type {number}
     * @memberof BicycleCostingOptionsAllOf
     */
    useHills?: number;
    /**
     * A measure of how much the cyclist wants to avoid roads with poor surfaces relative to the type of bicycle being ridden. When 0, there is no penalization of roads with poorer surfaces, and only bicycle speed is taken into account. As the value approaches 1, roads with poor surfaces relative to the bicycle type receive a heaver penalty, so they will only be taken if they significantly reduce travel time. When the value is 1, all bad surfaces are completely avoided from the route, including the start and end points.
     * @type {number}
     * @memberof BicycleCostingOptionsAllOf
     */
    avoidBadSurfaces?: number;
    /**
     * The estimated cost (in seconds) to return a bicycle in `bikeshare` mode.
     * @type {number}
     * @memberof BicycleCostingOptionsAllOf
     */
    bssReturnCost?: number;
    /**
     * A penalty (in seconds) to return a bicycle in `bikeshare` mode.
     * @type {number}
     * @memberof BicycleCostingOptionsAllOf
     */
    bssReturnPenalty?: number;
}


/**
 * @export
 */
export const BicycleCostingOptionsAllOfBicycleTypeEnum = {
    Road: 'Road',
    Hybrid: 'Hybrid',
    Cross: 'Cross',
    Mountain: 'Mountain'
} as const;
export type BicycleCostingOptionsAllOfBicycleTypeEnum = typeof BicycleCostingOptionsAllOfBicycleTypeEnum[keyof typeof BicycleCostingOptionsAllOfBicycleTypeEnum];


/**
 * Check if a given object implements the BicycleCostingOptionsAllOf interface.
 */
export function instanceOfBicycleCostingOptionsAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BicycleCostingOptionsAllOfFromJSON(json: any): BicycleCostingOptionsAllOf {
    return BicycleCostingOptionsAllOfFromJSONTyped(json, false);
}

export function BicycleCostingOptionsAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BicycleCostingOptionsAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bicycleType': !exists(json, 'bicycle_type') ? undefined : json['bicycle_type'],
        'cyclingSpeed': !exists(json, 'cycling_speed') ? undefined : json['cycling_speed'],
        'useRoads': !exists(json, 'use_roads') ? undefined : json['use_roads'],
        'useHills': !exists(json, 'use_hills') ? undefined : json['use_hills'],
        'avoidBadSurfaces': !exists(json, 'avoid_bad_surfaces') ? undefined : json['avoid_bad_surfaces'],
        'bssReturnCost': !exists(json, 'bss_return_cost') ? undefined : json['bss_return_cost'],
        'bssReturnPenalty': !exists(json, 'bss_return_penalty') ? undefined : json['bss_return_penalty'],
    };
}

export function BicycleCostingOptionsAllOfToJSON(value?: BicycleCostingOptionsAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bicycle_type': value.bicycleType,
        'cycling_speed': value.cyclingSpeed,
        'use_roads': value.useRoads,
        'use_hills': value.useHills,
        'avoid_bad_surfaces': value.avoidBadSurfaces,
        'bss_return_cost': value.bssReturnCost,
        'bss_return_penalty': value.bssReturnPenalty,
    };
}

