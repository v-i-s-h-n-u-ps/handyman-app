import { createFlagTypes, createRequestTypes } from "../action";

export const GET_SERVICES = createRequestTypes('GET_SERVICES');
export const SET_SERVICES = createFlagTypes('SET_SERVICES');
export const GET_DISTRICTS = createRequestTypes('GET_DISTRICTS');
export const GET_TALUKA = createRequestTypes('GET_TALUKA');
export const GET_PLACES = createRequestTypes('GET_PLACES');
export const GET_SERVICEMEN = createRequestTypes('GET_SERVICEMEN');
export const SET_SERVICEMEN = createFlagTypes('SET_SERVICEMEN');
export const SET_CONTACT_HITS = createRequestTypes('SET_CONTACT_HITS');
export const SET_TOTAL_PAGES = createFlagTypes("SET_TOTAL_PAGES");