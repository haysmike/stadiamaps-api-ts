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


/**
 * 
 * @export
 */
export const MatrixCostingModel = {
    Auto: 'auto',
    Bus: 'bus',
    Hov: 'hov',
    Taxi: 'taxi',
    Truck: 'truck',
    Bicycle: 'bicycle',
    Bikeshare: 'bikeshare',
    MotorScooter: 'motor_scooter',
    Motorcycle: 'motorcycle',
    Pedestrian: 'pedestrian'
} as const;
export type MatrixCostingModel = typeof MatrixCostingModel[keyof typeof MatrixCostingModel];


export function MatrixCostingModelFromJSON(json: any): MatrixCostingModel {
    return MatrixCostingModelFromJSONTyped(json, false);
}

export function MatrixCostingModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatrixCostingModel {
    return json as MatrixCostingModel;
}

export function MatrixCostingModelToJSON(value?: MatrixCostingModel | null): any {
    return value as any;
}
