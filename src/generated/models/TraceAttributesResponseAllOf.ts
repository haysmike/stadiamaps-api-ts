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
import type { TraceAttributesBaseResponse } from './TraceAttributesBaseResponse';
import {
    TraceAttributesBaseResponseFromJSON,
    TraceAttributesBaseResponseFromJSONTyped,
    TraceAttributesBaseResponseToJSON,
} from './TraceAttributesBaseResponse';
import type { ValhallaLongUnits } from './ValhallaLongUnits';
import {
    ValhallaLongUnitsFromJSON,
    ValhallaLongUnitsFromJSONTyped,
    ValhallaLongUnitsToJSON,
} from './ValhallaLongUnits';

/**
 * 
 * @export
 * @interface TraceAttributesResponseAllOf
 */
export interface TraceAttributesResponseAllOf {
    /**
     * An identifier to disambiguate requests (echoed by the server).
     * @type {string}
     * @memberof TraceAttributesResponseAllOf
     */
    id?: string;
    /**
     * 
     * @type {ValhallaLongUnits}
     * @memberof TraceAttributesResponseAllOf
     */
    units?: ValhallaLongUnits;
    /**
     * Alternate paths, if any, that were not classified as the best match.
     * @type {Array<TraceAttributesBaseResponse>}
     * @memberof TraceAttributesResponseAllOf
     */
    alternatePaths?: Array<TraceAttributesBaseResponse>;
}

/**
 * Check if a given object implements the TraceAttributesResponseAllOf interface.
 */
export function instanceOfTraceAttributesResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TraceAttributesResponseAllOfFromJSON(json: any): TraceAttributesResponseAllOf {
    return TraceAttributesResponseAllOfFromJSONTyped(json, false);
}

export function TraceAttributesResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceAttributesResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'units': !exists(json, 'units') ? undefined : ValhallaLongUnitsFromJSON(json['units']),
        'alternatePaths': !exists(json, 'alternate_paths') ? undefined : ((json['alternate_paths'] as Array<any>).map(TraceAttributesBaseResponseFromJSON)),
    };
}

export function TraceAttributesResponseAllOfToJSON(value?: TraceAttributesResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'units': ValhallaLongUnitsToJSON(value.units),
        'alternate_paths': value.alternatePaths === undefined ? undefined : ((value.alternatePaths as Array<any>).map(TraceAttributesBaseResponseToJSON)),
    };
}

