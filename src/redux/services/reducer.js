import { combineReducers } from "redux";
import _get from "lodash/get"

import { REQUEST, SUCCESS, FAILURE, UNSET, SET } from "../action";
import {
    GET_SERVICES, GET_PLACES, SET_TOTAL_PAGES,
    GET_DISTRICTS, GET_TALUKA, GET_SPECIFIC_SERVICE_DETAILS,
    GET_SERVICEMEN, SET_SERVICEMEN, GET_STATES,
    GET_SERVICE_TYPE_DISTRICTS, GET_SERVICE_TYPE_TALUKA, GET_SERVICE_TYPE_PLACES,
    GET_SERVICE_TYPE_STATES
} from "./types";

const initialState = {
    isFetching: false
}

const services = () => {

    const services = (state = initialState, action) => {
        switch (action.type) {
            case GET_SERVICES[REQUEST]: return { ...state, isFetching: true }
            case GET_SERVICES[SUCCESS]: return { isFetching: false, services: action.payload }
            case GET_SERVICES[FAILURE]: return { ...state, isFetching: false }
            default: return state;
        }
    }

    const states = (state = initialState, action) => {
        switch (action.type) {
            case GET_STATES[REQUEST]: return { ...state, isFetching: true }
            case GET_STATES[SUCCESS]: return { isFetching: false, states: action.payload }
            case GET_STATES[FAILURE]: return { ...state, isFetching: false }
            default: return state;
        }
    }

    const districts = (state = initialState, action) => {
        switch (action.type) {
            case GET_DISTRICTS[REQUEST]: return { ...state, isFetching: true }
            case GET_DISTRICTS[SUCCESS]: return { isFetching: false, districts: action.payload }
            case GET_DISTRICTS[FAILURE]: return { ...state, isFetching: false }
            default: return state;
        }
    }

    const taluka = (state = initialState, action) => {
        switch (action.type) {
            case GET_TALUKA[REQUEST]: return { ...state, isFetching: true }
            case GET_TALUKA[SUCCESS]: return { isFetching: false, taluka: action.payload }
            case GET_TALUKA[FAILURE]: return { ...state, isFetching: false }
            default: return state;
        }
    }

    const places = (state = initialState, action) => {
        switch (action.type) {
            case GET_PLACES[REQUEST]: return { ...state, isFetching: true }
            case GET_PLACES[SUCCESS]: return { isFetching: false, places: action.payload }
            case GET_PLACES[FAILURE]: return { ...state, isFetching: false }
            default: return state;
        }
    }

    const st_states = (state = {}, action) => {
        switch (action.type) {
            case GET_SERVICE_TYPE_STATES[REQUEST]: return { ...state, isFetching: true }
            case GET_SERVICE_TYPE_STATES[SUCCESS]: return { isFetching: false, states: action.payload }
            case GET_SERVICE_TYPE_STATES[FAILURE]: return { ...state, isFetching: false }
            default: return state;
        }
    }

    const st_districts = (state = {}, action) => {
        switch (action.type) {
            case GET_SERVICE_TYPE_DISTRICTS[REQUEST]: return { ...state, isFetching: true }
            case GET_SERVICE_TYPE_DISTRICTS[SUCCESS]: return { isFetching: false, districts: action.payload }
            case GET_SERVICE_TYPE_DISTRICTS[FAILURE]: return { ...state, isFetching: false }
            default: return state;
        }
    }

    const st_taluka = (state = {}, action) => {
        switch (action.type) {
            case GET_SERVICE_TYPE_TALUKA[REQUEST]: return { ...state, isFetching: true }
            case GET_SERVICE_TYPE_TALUKA[SUCCESS]: return { isFetching: false, taluka: action.payload }
            case GET_SERVICE_TYPE_TALUKA[FAILURE]: return { ...state, isFetching: false }
            default: return state;
        }
    }

    const st_places = (state = {}, action) => {
        switch (action.type) {
            case GET_SERVICE_TYPE_PLACES[REQUEST]: return { ...state, isFetching: true }
            case GET_SERVICE_TYPE_PLACES[SUCCESS]: return { isFetching: false, places: action.payload }
            case GET_SERVICE_TYPE_PLACES[FAILURE]: return { ...state, isFetching: false }
            default: return state;
        }
    }

    const servicemen = (state = initialState, action) => {
        switch (action.type) {
            case GET_SERVICEMEN[REQUEST]: return { ...state, isFetching: true }
            case GET_SERVICEMEN[SUCCESS]: {
                const prevData = _get(state, 'servicemen.data', []);
                const currentData = _get(action, 'payload', []);
                const data = prevData.length
                    ? [...prevData, ...currentData]
                    : currentData;
                return { ...state, isFetching: false, servicemen: { data: data } };
            }
            case GET_SERVICEMEN[FAILURE]: return { ...state, isFetching: false };
            case SET_TOTAL_PAGES[SET]: return { ...state, totalPages: action.payload }
            case SET_SERVICEMEN[UNSET]: return {};
            default: return state;
        }
    }

    const selectedService = (state = {}, action) => {
        switch (action.type) {
            case GET_SPECIFIC_SERVICE_DETAILS[REQUEST]: return { isUpdating: true }
            case GET_SPECIFIC_SERVICE_DETAILS[SUCCESS]: return { isUpdating: false, data: action.payload }
            case GET_SPECIFIC_SERVICE_DETAILS[FAILURE]: return { isUpdating: false, error: action.payload }
            default: return state;
        }
    }

    return combineReducers({
        services,
        states,
        districts,
        taluka,
        places,
        st_states,
        st_districts,
        st_taluka,
        st_places,
        servicemen,
        selectedService
    })
}

export default services;