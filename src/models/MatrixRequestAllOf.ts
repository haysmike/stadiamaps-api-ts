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
import type { Coordinate } from './Coordinate';
import {
    CoordinateFromJSON,
    CoordinateFromJSONTyped,
    CoordinateToJSON,
} from './Coordinate';
import type { CostingOptions } from './CostingOptions';
import {
    CostingOptionsFromJSON,
    CostingOptionsFromJSONTyped,
    CostingOptionsToJSON,
} from './CostingOptions';
import type { MatrixCostingModel } from './MatrixCostingModel';
import {
    MatrixCostingModelFromJSON,
    MatrixCostingModelFromJSONTyped,
    MatrixCostingModelToJSON,
} from './MatrixCostingModel';

/**
 * 
 * @export
 * @interface MatrixRequestAllOf
 */
export interface MatrixRequestAllOf {
    /**
     * An identifier to disambiguate requests (echoed by the server).
     * @type {string}
     * @memberof MatrixRequestAllOf
     */
    id?: string;
    /**
     * The list of starting locations
     * @type {Array<Coordinate>}
     * @memberof MatrixRequestAllOf
     */
    sources?: Array<Coordinate>;
    /**
     * The list of ending locations
     * @type {Array<Coordinate>}
     * @memberof MatrixRequestAllOf
     */
    targets?: Array<Coordinate>;
    /**
     * 
     * @type {MatrixCostingModel}
     * @memberof MatrixRequestAllOf
     */
    costing?: MatrixCostingModel;
    /**
     * 
     * @type {CostingOptions}
     * @memberof MatrixRequestAllOf
     */
    costingOptions?: CostingOptions;
    /**
     * Only applicable to one-to-many or many-to-one requests. This defaults to all locations. When specified explicitly, this option allows a partial result to be returned. This is basically equivalent to "find the closest/best locations out of the full set." This can have a dramatic improvement for large requests.
     * @type {number}
     * @memberof MatrixRequestAllOf
     */
    matrixLocations?: number;
}

/**
 * Check if a given object implements the MatrixRequestAllOf interface.
 */
export function instanceOfMatrixRequestAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MatrixRequestAllOfFromJSON(json: any): MatrixRequestAllOf {
    return MatrixRequestAllOfFromJSONTyped(json, false);
}

export function MatrixRequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatrixRequestAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'sources': !exists(json, 'sources') ? undefined : ((json['sources'] as Array<any>).map(CoordinateFromJSON)),
        'targets': !exists(json, 'targets') ? undefined : ((json['targets'] as Array<any>).map(CoordinateFromJSON)),
        'costing': !exists(json, 'costing') ? undefined : MatrixCostingModelFromJSON(json['costing']),
        'costingOptions': !exists(json, 'costing_options') ? undefined : CostingOptionsFromJSON(json['costing_options']),
        'matrixLocations': !exists(json, 'matrix_locations') ? undefined : json['matrix_locations'],
    };
}

export function MatrixRequestAllOfToJSON(value?: MatrixRequestAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'sources': value.sources === undefined ? undefined : ((value.sources as Array<any>).map(CoordinateToJSON)),
        'targets': value.targets === undefined ? undefined : ((value.targets as Array<any>).map(CoordinateToJSON)),
        'costing': MatrixCostingModelToJSON(value.costing),
        'costing_options': CostingOptionsToJSON(value.costingOptions),
        'matrix_locations': value.matrixLocations,
    };
}
