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
import type { AutoCostingOptions } from './AutoCostingOptions';
import {
    AutoCostingOptionsFromJSON,
    AutoCostingOptionsFromJSONTyped,
    AutoCostingOptionsToJSON,
} from './AutoCostingOptions';
import type { BicycleCostingOptions } from './BicycleCostingOptions';
import {
    BicycleCostingOptionsFromJSON,
    BicycleCostingOptionsFromJSONTyped,
    BicycleCostingOptionsToJSON,
} from './BicycleCostingOptions';
import type { MotorScooterCostingOptions } from './MotorScooterCostingOptions';
import {
    MotorScooterCostingOptionsFromJSON,
    MotorScooterCostingOptionsFromJSONTyped,
    MotorScooterCostingOptionsToJSON,
} from './MotorScooterCostingOptions';
import type { MotorcycleCostingOptions } from './MotorcycleCostingOptions';
import {
    MotorcycleCostingOptionsFromJSON,
    MotorcycleCostingOptionsFromJSONTyped,
    MotorcycleCostingOptionsToJSON,
} from './MotorcycleCostingOptions';
import type { PedestrianCostingOptions } from './PedestrianCostingOptions';
import {
    PedestrianCostingOptionsFromJSON,
    PedestrianCostingOptionsFromJSONTyped,
    PedestrianCostingOptionsToJSON,
} from './PedestrianCostingOptions';
import type { TruckCostingOptions } from './TruckCostingOptions';
import {
    TruckCostingOptionsFromJSON,
    TruckCostingOptionsFromJSONTyped,
    TruckCostingOptionsToJSON,
} from './TruckCostingOptions';

/**
 * 
 * @export
 * @interface CostingOptions
 */
export interface CostingOptions {
    /**
     * 
     * @type {AutoCostingOptions}
     * @memberof CostingOptions
     */
    auto?: AutoCostingOptions;
    /**
     * 
     * @type {AutoCostingOptions}
     * @memberof CostingOptions
     */
    bus?: AutoCostingOptions;
    /**
     * 
     * @type {AutoCostingOptions}
     * @memberof CostingOptions
     */
    taxi?: AutoCostingOptions;
    /**
     * 
     * @type {TruckCostingOptions}
     * @memberof CostingOptions
     */
    truck?: TruckCostingOptions;
    /**
     * 
     * @type {BicycleCostingOptions}
     * @memberof CostingOptions
     */
    bicycle?: BicycleCostingOptions;
    /**
     * 
     * @type {MotorScooterCostingOptions}
     * @memberof CostingOptions
     */
    motorScooter?: MotorScooterCostingOptions;
    /**
     * 
     * @type {MotorcycleCostingOptions}
     * @memberof CostingOptions
     */
    motorcycle?: MotorcycleCostingOptions;
    /**
     * 
     * @type {PedestrianCostingOptions}
     * @memberof CostingOptions
     */
    pedestrian?: PedestrianCostingOptions;
}

/**
 * Check if a given object implements the CostingOptions interface.
 */
export function instanceOfCostingOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CostingOptionsFromJSON(json: any): CostingOptions {
    return CostingOptionsFromJSONTyped(json, false);
}

export function CostingOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CostingOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'auto': !exists(json, 'auto') ? undefined : AutoCostingOptionsFromJSON(json['auto']),
        'bus': !exists(json, 'bus') ? undefined : AutoCostingOptionsFromJSON(json['bus']),
        'taxi': !exists(json, 'taxi') ? undefined : AutoCostingOptionsFromJSON(json['taxi']),
        'truck': !exists(json, 'truck') ? undefined : TruckCostingOptionsFromJSON(json['truck']),
        'bicycle': !exists(json, 'bicycle') ? undefined : BicycleCostingOptionsFromJSON(json['bicycle']),
        'motorScooter': !exists(json, 'motor_scooter') ? undefined : MotorScooterCostingOptionsFromJSON(json['motor_scooter']),
        'motorcycle': !exists(json, 'motorcycle') ? undefined : MotorcycleCostingOptionsFromJSON(json['motorcycle']),
        'pedestrian': !exists(json, 'pedestrian') ? undefined : PedestrianCostingOptionsFromJSON(json['pedestrian']),
    };
}

export function CostingOptionsToJSON(value?: CostingOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auto': AutoCostingOptionsToJSON(value.auto),
        'bus': AutoCostingOptionsToJSON(value.bus),
        'taxi': AutoCostingOptionsToJSON(value.taxi),
        'truck': TruckCostingOptionsToJSON(value.truck),
        'bicycle': BicycleCostingOptionsToJSON(value.bicycle),
        'motor_scooter': MotorScooterCostingOptionsToJSON(value.motorScooter),
        'motorcycle': MotorcycleCostingOptionsToJSON(value.motorcycle),
        'pedestrian': PedestrianCostingOptionsToJSON(value.pedestrian),
    };
}

