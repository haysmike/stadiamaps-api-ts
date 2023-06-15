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
import type { RouteManeuver } from './RouteManeuver';
import {
    RouteManeuverFromJSON,
    RouteManeuverFromJSONTyped,
    RouteManeuverToJSON,
} from './RouteManeuver';
import type { RouteSummary } from './RouteSummary';
import {
    RouteSummaryFromJSON,
    RouteSummaryFromJSONTyped,
    RouteSummaryToJSON,
} from './RouteSummary';

/**
 * 
 * @export
 * @interface RouteLeg
 */
export interface RouteLeg {
    /**
     * 
     * @type {Array<RouteManeuver>}
     * @memberof RouteLeg
     */
    maneuvers: Array<RouteManeuver>;
    /**
     * An encoded polyline (https://developers.google.com/maps/documentation/utilities/polylinealgorithm) with 6 digits of decimal precision.
     * @type {string}
     * @memberof RouteLeg
     */
    shape: string;
    /**
     * 
     * @type {RouteSummary}
     * @memberof RouteLeg
     */
    summary: RouteSummary;
}

/**
 * Check if a given object implements the RouteLeg interface.
 */
export function instanceOfRouteLeg(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "maneuvers" in value;
    isInstance = isInstance && "shape" in value;
    isInstance = isInstance && "summary" in value;

    return isInstance;
}

export function RouteLegFromJSON(json: any): RouteLeg {
    return RouteLegFromJSONTyped(json, false);
}

export function RouteLegFromJSONTyped(json: any, ignoreDiscriminator: boolean): RouteLeg {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maneuvers': ((json['maneuvers'] as Array<any>).map(RouteManeuverFromJSON)),
        'shape': json['shape'],
        'summary': RouteSummaryFromJSON(json['summary']),
    };
}

export function RouteLegToJSON(value?: RouteLeg | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maneuvers': ((value.maneuvers as Array<any>).map(RouteManeuverToJSON)),
        'shape': value.shape,
        'summary': RouteSummaryToJSON(value.summary),
    };
}

