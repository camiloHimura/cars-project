import { GET_ALL_CARS, FILTER_CARS, SORT_CARS} from "./actions-types";


export function getAllcars(payload) {
    return {type: GET_ALL_CARS, payload}
}

export function filterCard(payload) {
    return {type: FILTER_CARS, payload}
}
export function sortCard(payload) {
    return {type: SORT_CARS, payload}
}
