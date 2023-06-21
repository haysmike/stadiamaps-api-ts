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
import type { IsochroneFeature } from './IsochroneFeature';
import {
    IsochroneFeatureFromJSON,
    IsochroneFeatureFromJSONTyped,
    IsochroneFeatureToJSON,
} from './IsochroneFeature';

/**
 * 
 * @export
 * @interface IsochroneResponse
 */
export interface IsochroneResponse {
    /**
     * 
     * @type {string}
     * @memberof IsochroneResponse
     */
    id?: string;
    /**
     * 
     * @type {Array<IsochroneFeature>}
     * @memberof IsochroneResponse
     */
    features: Array<IsochroneFeature>;
    /**
     * 
     * @type {string}
     * @memberof IsochroneResponse
     */
    type?: IsochroneResponseTypeEnum;
}


/**
 * @export
 */
export const IsochroneResponseTypeEnum = {
    FeatureCollection: 'FeatureCollection'
} as const;
export type IsochroneResponseTypeEnum = typeof IsochroneResponseTypeEnum[keyof typeof IsochroneResponseTypeEnum];


/**
 * Check if a given object implements the IsochroneResponse interface.
 */
export function instanceOfIsochroneResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "features" in value;

    return isInstance;
}

export function IsochroneResponseFromJSON(json: any): IsochroneResponse {
    return IsochroneResponseFromJSONTyped(json, false);
}

export function IsochroneResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsochroneResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'features': ((json['features'] as Array<any>).map(IsochroneFeatureFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IsochroneResponseToJSON(value?: IsochroneResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'features': ((value.features as Array<any>).map(IsochroneFeatureToJSON)),
        'type': value.type,
    };
}

