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
import type { PeliasGeoJSONPropertiesAddendumOsm } from './PeliasGeoJSONPropertiesAddendumOsm';
import {
    PeliasGeoJSONPropertiesAddendumOsmFromJSON,
    PeliasGeoJSONPropertiesAddendumOsmFromJSONTyped,
    PeliasGeoJSONPropertiesAddendumOsmToJSON,
} from './PeliasGeoJSONPropertiesAddendumOsm';

/**
 * Optional additional information from the underlying data source (ex: OSM). This includes select fields. The most useful fields are mapped in the definition here, but others may be available.
 * @export
 * @interface PeliasGeoJSONPropertiesAddendum
 */
export interface PeliasGeoJSONPropertiesAddendum {
    [key: string]: any | any;
    /**
     * 
     * @type {PeliasGeoJSONPropertiesAddendumOsm}
     * @memberof PeliasGeoJSONPropertiesAddendum
     */
    osm?: PeliasGeoJSONPropertiesAddendumOsm;
}

/**
 * Check if a given object implements the PeliasGeoJSONPropertiesAddendum interface.
 */
export function instanceOfPeliasGeoJSONPropertiesAddendum(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PeliasGeoJSONPropertiesAddendumFromJSON(json: any): PeliasGeoJSONPropertiesAddendum {
    return PeliasGeoJSONPropertiesAddendumFromJSONTyped(json, false);
}

export function PeliasGeoJSONPropertiesAddendumFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeliasGeoJSONPropertiesAddendum {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
            ...json,
        'osm': !exists(json, 'osm') ? undefined : PeliasGeoJSONPropertiesAddendumOsmFromJSON(json['osm']),
    };
}

export function PeliasGeoJSONPropertiesAddendumToJSON(value?: PeliasGeoJSONPropertiesAddendum | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        'osm': PeliasGeoJSONPropertiesAddendumOsmToJSON(value.osm),
    };
}

