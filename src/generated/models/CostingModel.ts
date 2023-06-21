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
 * Costing models for determining the most optimal route to take. Note that bikeshare and motorcycle are still in beta. While Valhalla supports multimodal routing, we do not currently process transit data and have excluded it from the list. See https://valhalla.readthedocs.io/en/latest/api/turn-by-turn/api-reference/#costing-models for detailed descriptions of each model.
 * @export
 */
export const CostingModel = {
    Auto: 'auto',
    Bus: 'bus',
    Taxi: 'taxi',
    Truck: 'truck',
    Bicycle: 'bicycle',
    Bikeshare: 'bikeshare',
    MotorScooter: 'motor_scooter',
    Motorcycle: 'motorcycle',
    Pedestrian: 'pedestrian'
} as const;
export type CostingModel = typeof CostingModel[keyof typeof CostingModel];


export function CostingModelFromJSON(json: any): CostingModel {
    return CostingModelFromJSONTyped(json, false);
}

export function CostingModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CostingModel {
    return json as CostingModel;
}

export function CostingModelToJSON(value?: CostingModel | null): any {
    return value as any;
}

