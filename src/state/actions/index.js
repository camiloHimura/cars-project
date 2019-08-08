import { CARS_LOADED, FILTER_CARS, SORT_CARS} from "./actions-types";

export function carsLoaded(payload) {
    return {type: CARS_LOADED, payload}
}

export function filterCard(payload) {
    return {type: FILTER_CARS, payload}
}
export function sortCard(payload) {
    return {type: SORT_CARS, payload}
}
