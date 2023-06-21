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
export const ValhallaLongUnits = {
    Miles: 'miles',
    Kilometers: 'kilometers'
} as const;
export type ValhallaLongUnits = typeof ValhallaLongUnits[keyof typeof ValhallaLongUnits];


export function ValhallaLongUnitsFromJSON(json: any): ValhallaLongUnits {
    return ValhallaLongUnitsFromJSONTyped(json, false);
}

export function ValhallaLongUnitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValhallaLongUnits {
    return json as ValhallaLongUnits;
}

export function ValhallaLongUnitsToJSON(value?: ValhallaLongUnits | null): any {
    return value as any;
}

