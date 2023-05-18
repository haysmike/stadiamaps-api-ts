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


/**
 * The directions in which the edge is traversable.
 * @export
 */
export const Traversability = {
    Forward: 'forward',
    Backward: 'backward',
    Both: 'both'
} as const;
export type Traversability = typeof Traversability[keyof typeof Traversability];


export function TraversabilityFromJSON(json: any): Traversability {
    return TraversabilityFromJSONTyped(json, false);
}

export function TraversabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Traversability {
    return json as Traversability;
}

export function TraversabilityToJSON(value?: Traversability | null): any {
    return value as any;
}

