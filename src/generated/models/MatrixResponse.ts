/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 5.0.3
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
import type { MatrixDistance } from './MatrixDistance';
import {
    MatrixDistanceFromJSON,
    MatrixDistanceFromJSONTyped,
    MatrixDistanceToJSON,
} from './MatrixDistance';
import type { ValhallaLongUnits } from './ValhallaLongUnits';
import {
    ValhallaLongUnitsFromJSON,
    ValhallaLongUnitsFromJSONTyped,
    ValhallaLongUnitsToJSON,
} from './ValhallaLongUnits';
import type { Warning } from './Warning';
import {
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';

/**
 * 
 * @export
 * @interface MatrixResponse
 */
export interface MatrixResponse {
    /**
     * An identifier to disambiguate requests (echoed by the server).
     * @type {string}
     * @memberof MatrixResponse
     */
    id?: string;
    /**
     * The list of starting locations
     * @type {Array<Array<Coordinate>>}
     * @memberof MatrixResponse
     */
    sources: Array<Array<Coordinate>>;
    /**
     * The list of ending locations
     * @type {Array<Array<Coordinate>>}
     * @memberof MatrixResponse
     */
    targets: Array<Array<Coordinate>>;
    /**
     * The matrix of starting and ending locations, along with the computed distance and travel time. The array is row-ordered. This means that the time and distance from the first location to all others forms the first row of the array, followed by the time and distance from the second source location to all target locations, etc.
     * @type {Array<Array<MatrixDistance>>}
     * @memberof MatrixResponse
     */
    sourcesToTargets: Array<Array<MatrixDistance>>;
    /**
     * 
     * @type {Array<Warning>}
     * @memberof MatrixResponse
     */
    warnings?: Array<Warning>;
    /**
     * 
     * @type {ValhallaLongUnits}
     * @memberof MatrixResponse
     */
    units: ValhallaLongUnits;
}

/**
 * Check if a given object implements the MatrixResponse interface.
 */
export function instanceOfMatrixResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sources" in value;
    isInstance = isInstance && "targets" in value;
    isInstance = isInstance && "sourcesToTargets" in value;
    isInstance = isInstance && "units" in value;

    return isInstance;
}

export function MatrixResponseFromJSON(json: any): MatrixResponse {
    return MatrixResponseFromJSONTyped(json, false);
}

export function MatrixResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatrixResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'sources': json['sources'],
        'targets': json['targets'],
        'sourcesToTargets': json['sources_to_targets'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningFromJSON)),
        'units': ValhallaLongUnitsFromJSON(json['units']),
    };
}

export function MatrixResponseToJSON(value?: MatrixResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'sources': value.sources,
        'targets': value.targets,
        'sources_to_targets': value.sourcesToTargets,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningToJSON)),
        'units': ValhallaLongUnitsToJSON(value.units),
    };
}

