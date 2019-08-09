import { CARS_LOADED, FILTER_CARS, SORT_CARS, COLORS_LOADED, MANUFACTURER_LOADED, 
            FILTERS_SELECTED, PAGE_SELECTED, SORT_SELECTED} from "./actions-types";

export {getAllCars, getColors, getManufacturers} from "./asyncCarsAction";

export function carsLoaded(payload) {
    return {type: CARS_LOADED, payload}
}

export function colorsLoaded(payload) {
    return {type: COLORS_LOADED, payload}
}

export function manufacturersLoaded(payload) {
    return {type: MANUFACTURER_LOADED, payload}
}

export function filterCard(payload) {
    return {type: FILTER_CARS, payload}
}

export function sortCard(payload) {
    return {type: SORT_CARS, payload}
}

export function filtersSelected(payload) {
    return {type: FILTERS_SELECTED, payload}
}

export function pageSelected(payload) {
    return {type: PAGE_SELECTED, payload}
}

export function sortSelected(payload) {
    return {type: SORT_SELECTED, payload}
}
