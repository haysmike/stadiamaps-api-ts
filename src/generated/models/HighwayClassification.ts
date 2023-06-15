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
/**
 * 
 * @export
 * @interface HighwayClassification
 */
export interface HighwayClassification {
    /**
     * Is the edge internal to an intersection?
     * @type {boolean}
     * @memberof HighwayClassification
     */
    internal?: boolean;
    /**
     * Is the edge a ramp or turn channel?
     * @type {boolean}
     * @memberof HighwayClassification
     */
    link?: boolean;
    /**
     * A representation of the smoothness of the highway. This is used for costing and access checks based on the vehicle type.
     * @type {string}
     * @memberof HighwayClassification
     */
    surface?: HighwayClassificationSurfaceEnum;
    /**
     * 
     * @type {string}
     * @memberof HighwayClassification
     */
    use?: HighwayClassificationUseEnum;
    /**
     * The classification/importance of the road/path. Used for a variety of purposes including fallback speed estimation and access for certain vehicle types.
     * @type {string}
     * @memberof HighwayClassification
     */
    classification?: HighwayClassificationClassificationEnum;
}


/**
 * @export
 */
export const HighwayClassificationSurfaceEnum = {
    PavedSmooth: 'paved_smooth',
    Paved: 'paved',
    PavedRough: 'paved_rough',
    Compacted: 'compacted',
    Dirt: 'dirt',
    Gravel: 'gravel',
    Path: 'path',
    Impassable: 'impassable'
} as const;
export type HighwayClassificationSurfaceEnum = typeof HighwayClassificationSurfaceEnum[keyof typeof HighwayClassificationSurfaceEnum];

/**
 * @export
 */
export const HighwayClassificationUseEnum = {
    Road: 'road',
    Ramp: 'ramp',
    TurnChannel: 'turn_channel',
    Track: 'track',
    Driveway: 'driveway',
    Alley: 'alley',
    ParkingAisle: 'parking_aisle',
    EmergencyAccess: 'emergency_access',
    DriveThrough: 'drive_through',
    Culdesac: 'culdesac',
    LivingStreet: 'living_street',
    ServiceRoad: 'service_road',
    Cycleway: 'cycleway',
    MountainBike: 'mountain_bike',
    Sidewalk: 'sidewalk',
    Footway: 'footway',
    Elevator: 'elevator',
    Steps: 'steps',
    Escalator: 'escalator',
    Path: 'path',
    Pedestrian: 'pedestrian',
    Bridleway: 'bridleway',
    PedestrianCrossing: 'pedestrian_crossing',
    RestArea: 'rest_area',
    ServiceArea: 'service_area',
    Other: 'other',
    Rail: 'rail',
    Ferry: 'ferry',
    RailFerry: 'rail-ferry',
    Bus: 'bus',
    EgressConnection: 'egress_connection',
    PlatformConnnection: 'platform_connnection',
    TransitConnection: 'transit_connection',
    Construction: 'construction'
} as const;
export type HighwayClassificationUseEnum = typeof HighwayClassificationUseEnum[keyof typeof HighwayClassificationUseEnum];

/**
 * @export
 */
export const HighwayClassificationClassificationEnum = {
    Motorway: 'motorway',
    Trunk: 'trunk',
    Primary: 'primary',
    Secondary: 'secondary',
    Tertiary: 'tertiary',
    Unclassified: 'unclassified',
    Residential: 'residential',
    ServiceOther: 'service_other'
} as const;
export type HighwayClassificationClassificationEnum = typeof HighwayClassificationClassificationEnum[keyof typeof HighwayClassificationClassificationEnum];


/**
 * Check if a given object implements the HighwayClassification interface.
 */
export function instanceOfHighwayClassification(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HighwayClassificationFromJSON(json: any): HighwayClassification {
    return HighwayClassificationFromJSONTyped(json, false);
}

export function HighwayClassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): HighwayClassification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'internal': !exists(json, 'internal') ? undefined : json['internal'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'surface': !exists(json, 'surface') ? undefined : json['surface'],
        'use': !exists(json, 'use') ? undefined : json['use'],
        'classification': !exists(json, 'classification') ? undefined : json['classification'],
    };
}

export function HighwayClassificationToJSON(value?: HighwayClassification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'internal': value.internal,
        'link': value.link,
        'surface': value.surface,
        'use': value.use,
        'classification': value.classification,
    };
}

