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
 * @interface BicycleCostingOptions
 */
export interface BicycleCostingOptions {
    /**
     * A penalty (in seconds) applied when transitioning between roads (determined by name).
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    maneuverPenalty?: number;
    /**
     * The estimated cost (in seconds) when a gate is encountered.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    gateCost?: number;
    /**
     * A penalty (in seconds) applied to the route cost when a gate is encountered. This penalty can be used to reduce the likelihood of suggesting a route with gates unless absolutely necessary.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    gatePenalty?: number;
    /**
     * The estimated cost (in seconds) when encountering an international border.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    countryCrossingCost?: number;
    /**
     * A penalty applied to transitions to international border crossings. This penalty can be used to reduce the likelihood of suggesting a route with border crossings unless absolutely necessary.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    countryCrossingPenalty?: number;
    /**
     * A penalty applied to transitions to service roads. This penalty can be used to reduce the likelihood of suggesting a route with service roads unless absolutely necessary. The default penalty is 15 for cars, busses, motor scooters, and motorcycles; and zero for others.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    servicePenalty?: number;
    /**
     * A factor that multiplies the cost when service roads are encountered. The default is 1.2 for cars and busses, and 1 for trucks, motor scooters, and motorcycles.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    serviceFactor?: number;
    /**
     * A measure of willingness to take living streets. Values near 0 attempt to avoid them, and values near 1 will favour them. Note that as some routes may be impossible without living streets, 0 does not guarantee avoidance of them. The default value is 0 for trucks; 0.1 for other motor vehicles; 0.5 for bicycles; and 0.6 for pedestrians.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    useLivingStreets?: number;
    /**
     * A measure of willingness to take ferries. Values near 0 attempt to avoid ferries, and values near 1 will favour them. Note that as some routes may be impossible without ferries, 0 does not guarantee avoidance of them.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    useFerry?: number;
    /**
     * 
     * @type {string}
     * @memberof BicycleCostingOptions
     */
    bicycleType?: BicycleCostingOptionsBicycleTypeEnum;
    /**
     * The average comfortable travel speed (in kph) along smooth, flat roads. The costing will vary the speed based on the surface, bicycle type, elevation change, etc. This value should be the average sustainable cruising speed the cyclist can maintain over the entire route.
     * The default speeds are as follows based on bicycle type:
     *   * Road - 25kph
     *   * Cross - 20kph
     *   * Hybrid - 18kph
     *   * Mountain - 16kph
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    cyclingSpeed?: number;
    /**
     * A measure of willingness to use roads alongside other vehicles. Values near 0 attempt to avoid roads and stay on cycleways, and values near 1 indicate the cyclist is more comfortable on roads.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    useRoads?: number;
    /**
     * A measure of willingness to take tackle hills. Values near 0 attempt to avoid hills and steeper grades even if it means a longer route, and values near 1 indicates that the user does not fear them. Note that as some routes may be impossible without hills, 0 does not guarantee avoidance of them.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    useHills?: number;
    /**
     * A measure of how much the cyclist wants to avoid roads with poor surfaces relative to the type of bicycle being ridden. When 0, there is no penalization of roads with poorer surfaces, and only bicycle speed is taken into account. As the value approaches 1, roads with poor surfaces relative to the bicycle type receive a heaver penalty, so they will only be taken if they significantly reduce travel time. When the value is 1, all bad surfaces are completely avoided from the route, including the start and end points.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    avoidBadSurfaces?: number;
    /**
     * The estimated cost (in seconds) to return a bicycle in `bikeshare` mode.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    bssReturnCost?: number;
    /**
     * A penalty (in seconds) to return a bicycle in `bikeshare` mode.
     * @type {number}
     * @memberof BicycleCostingOptions
     */
    bssReturnPenalty?: number;
}


/**
 * @export
 */
export const BicycleCostingOptionsBicycleTypeEnum = {
    Road: 'Road',
    Hybrid: 'Hybrid',
    Cross: 'Cross',
    Mountain: 'Mountain'
} as const;
export type BicycleCostingOptionsBicycleTypeEnum = typeof BicycleCostingOptionsBicycleTypeEnum[keyof typeof BicycleCostingOptionsBicycleTypeEnum];


/**
 * Check if a given object implements the BicycleCostingOptions interface.
 */
export function instanceOfBicycleCostingOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BicycleCostingOptionsFromJSON(json: any): BicycleCostingOptions {
    return BicycleCostingOptionsFromJSONTyped(json, false);
}

export function BicycleCostingOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BicycleCostingOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maneuverPenalty': !exists(json, 'maneuver_penalty') ? undefined : json['maneuver_penalty'],
        'gateCost': !exists(json, 'gate_cost') ? undefined : json['gate_cost'],
        'gatePenalty': !exists(json, 'gate_penalty') ? undefined : json['gate_penalty'],
        'countryCrossingCost': !exists(json, 'country_crossing_cost') ? undefined : json['country_crossing_cost'],
        'countryCrossingPenalty': !exists(json, 'country_crossing_penalty') ? undefined : json['country_crossing_penalty'],
        'servicePenalty': !exists(json, 'service_penalty') ? undefined : json['service_penalty'],
        'serviceFactor': !exists(json, 'service_factor') ? undefined : json['service_factor'],
        'useLivingStreets': !exists(json, 'use_living_streets') ? undefined : json['use_living_streets'],
        'useFerry': !exists(json, 'use_ferry') ? undefined : json['use_ferry'],
        'bicycleType': !exists(json, 'bicycle_type') ? undefined : json['bicycle_type'],
        'cyclingSpeed': !exists(json, 'cycling_speed') ? undefined : json['cycling_speed'],
        'useRoads': !exists(json, 'use_roads') ? undefined : json['use_roads'],
        'useHills': !exists(json, 'use_hills') ? undefined : json['use_hills'],
        'avoidBadSurfaces': !exists(json, 'avoid_bad_surfaces') ? undefined : json['avoid_bad_surfaces'],
        'bssReturnCost': !exists(json, 'bss_return_cost') ? undefined : json['bss_return_cost'],
        'bssReturnPenalty': !exists(json, 'bss_return_penalty') ? undefined : json['bss_return_penalty'],
    };
}

export function BicycleCostingOptionsToJSON(value?: BicycleCostingOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maneuver_penalty': value.maneuverPenalty,
        'gate_cost': value.gateCost,
        'gate_penalty': value.gatePenalty,
        'country_crossing_cost': value.countryCrossingCost,
        'country_crossing_penalty': value.countryCrossingPenalty,
        'service_penalty': value.servicePenalty,
        'service_factor': value.serviceFactor,
        'use_living_streets': value.useLivingStreets,
        'use_ferry': value.useFerry,
        'bicycle_type': value.bicycleType,
        'cycling_speed': value.cyclingSpeed,
        'use_roads': value.useRoads,
        'use_hills': value.useHills,
        'avoid_bad_surfaces': value.avoidBadSurfaces,
        'bss_return_cost': value.bssReturnCost,
        'bss_return_penalty': value.bssReturnPenalty,
    };
}

