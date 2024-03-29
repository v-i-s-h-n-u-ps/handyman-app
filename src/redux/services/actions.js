import { action, REQUEST, SUCCESS, FAILURE, UNSET } from "../action";

import {
    GET_SERVICES, GET_DISTRICTS, SET_SERVICEMEN, GET_SPECIFIC_SERVICE_DETAILS,
    GET_TALUKA, GET_PLACES, GET_SERVICEMEN, SET_CONTACT_HITS, GET_STATES,
    GET_SERVICE_TYPE_DISTRICTS, GET_SERVICE_TYPE_TALUKA, GET_SERVICE_TYPE_PLACES,
    GET_SERVICE_TYPE_STATES
} from "./types";

export const getServices = {
    request: () => action(GET_SERVICES[REQUEST]),
    success: ({ data, response }) => action(GET_SERVICES[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_SERVICES[FAILURE], { error, response }),
}

export const getStates = {
    request: data => action(GET_STATES[REQUEST], { data }),
    success: ({ data, response }) => action(GET_STATES[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_STATES[FAILURE], { error, response }),
}

export const getDistricts = {
    request: data => action(GET_DISTRICTS[REQUEST], { data }),
    success: ({ data, response }) => action(GET_DISTRICTS[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_DISTRICTS[FAILURE], { error, response }),
}

export const getTaluka = {
    request: data => action(GET_TALUKA[REQUEST], { data }),
    success: ({ data, response }) => action(GET_TALUKA[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_TALUKA[FAILURE], { error, response }),
}

export const getPlaces = {
    request: data => action(GET_PLACES[REQUEST], { data }),
    success: ({ data, response }) => action(GET_PLACES[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_PLACES[FAILURE], { error, response }),
}

export const getServiceTypeStates = {
    request: data => action(GET_SERVICE_TYPE_STATES[REQUEST], { data }),
    success: ({ data, response }) => action(GET_SERVICE_TYPE_STATES[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_SERVICE_TYPE_STATES[FAILURE], { error, response }),
}

export const getServiceTypeDistricts = {
    request: data => action(GET_SERVICE_TYPE_DISTRICTS[REQUEST], { data }),
    success: ({ data, response }) => action(GET_SERVICE_TYPE_DISTRICTS[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_SERVICE_TYPE_DISTRICTS[FAILURE], { error, response }),
}

export const getServiceTypeTaluka = {
    request: data => action(GET_SERVICE_TYPE_TALUKA[REQUEST], { data }),
    success: ({ data, response }) => action(GET_SERVICE_TYPE_TALUKA[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_SERVICE_TYPE_TALUKA[FAILURE], { error, response }),
}

export const getServiceTypePlaces = {
    request: data => action(GET_SERVICE_TYPE_PLACES[REQUEST], { data }),
    success: ({ data, response }) => action(GET_SERVICE_TYPE_PLACES[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_SERVICE_TYPE_PLACES[FAILURE], { error, response }),
}

export const getServicemen = {
    request: data => action(GET_SERVICEMEN[REQUEST], { data }),
    success: ({ data, response }) => action(GET_SERVICEMEN[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_SERVICEMEN[FAILURE], { error, response }),
}

export const servicemen = {
    unset: () => action(SET_SERVICEMEN[UNSET]),
}

export const setContactHits = {
    request: data => action(SET_CONTACT_HITS[REQUEST], { data }),
    success: ({ data, response }) => action(SET_CONTACT_HITS[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(SET_CONTACT_HITS[FAILURE], { error, response }),
}

export const getServiceDetails = {
    request: data => action(GET_SPECIFIC_SERVICE_DETAILS[REQUEST], { data }),
    success: ({ data, response }) => action(GET_SPECIFIC_SERVICE_DETAILS[SUCCESS], { data, response }),
    failure: ({ error, response }) => action(GET_SPECIFIC_SERVICE_DETAILS[FAILURE], { error, response }),
}