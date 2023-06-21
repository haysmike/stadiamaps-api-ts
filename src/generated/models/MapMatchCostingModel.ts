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


/**
 * 
 * @export
 */
export const MapMatchCostingModel = {
    Auto: 'auto',
    Bicycle: 'bicycle',
    Bus: 'bus',
    Pedestrian: 'pedestrian'
} as const;
export type MapMatchCostingModel = typeof MapMatchCostingModel[keyof typeof MapMatchCostingModel];


export function MapMatchCostingModelFromJSON(json: any): MapMatchCostingModel {
    return MapMatchCostingModelFromJSONTyped(json, false);
}

export function MapMatchCostingModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapMatchCostingModel {
    return json as MapMatchCostingModel;
}

export function MapMatchCostingModelToJSON(value?: MapMatchCostingModel | null): any {
    return value as any;
}

